import { Tool, useClient, useDataset } from "sanity";
import { Container, Stack, Card, Button } from "@sanity/ui";
import { useEffect, useState } from "react";
import { useIntentLink } from "sanity/router";

const TaskItem = ({ task }: { task: any }) => {
  const intent = useIntentLink({
    intent: "edit",
    params: {
      id: task.target.document._ref,
      type: task.target.documentType
    }
  });

  return (
    <Card
      padding={3}
      border
      radius={3}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }}
    >
      <div>
        {task.context?.notification?.targetContentTitle} - {task.title}
      </div>
      <Button href={intent.href} onClick={intent.onClick} size={1}>
        View
      </Button>
    </Card>
  );
};

export const TasksTool: Tool = {
  name: "tasks",
  title: "Tasks",
  component: (props) => {
    const dataset = useDataset();
    const client = useClient({ apiVersion: "2024-09-25" }).withConfig({
      dataset: `${dataset}-comments`
    });

    const [tasks, setTasks] = useState([]);
    console.log("t", tasks);

    useEffect(() => {
      client
        .fetch('*[_type=="tasks.task" && status=="open"]')
        .then((result) => setTasks(result));
    }, []);

    return (
      <Container>
        <Stack space={3} paddingTop={3}>
          {tasks.map((task: any) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </Stack>
      </Container>
    );
  }
};
