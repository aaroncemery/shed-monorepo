import {
  DocumentActionComponent,
  useClient,
  useCurrentUser,
  useDataset,
  useProject
} from "sanity";

export const assignTaskAction: DocumentActionComponent = (props: any) => {
  const value = props.draft || props.published;
  const project = useProject();
  const dataset = useDataset();
  const user = useCurrentUser();
  const client = useClient({ apiVersion: "2024-11-14" }).withConfig({
    dataset: `${dataset}-comments`
  });

  const createAssignment = () => {
    console.log(dataset, client);

    client.create({
      subscribers: [user?.id],
      target: {
        document: {
          _projectId: project.value?.id,
          _weak: true,
          _ref: props.id,
          _type: "crossDatasetReference",
          _dataset: dataset
        },
        documentType: props.type
      },
      createdByUser: new Date().toISOString(),
      context: {
        notification: {
          targetContentTitle: value?.title,
          workspaceTitle: "Tasks Workflow Example",
          url: "http://localhost:3333//structure/?sidebar=tasks&selectedTask=e30f2844-b800-45f2-b347-b77229a09dc4&viewMode=edit"
        }
      },
      authorId: user?.id,
      assignedTo: "pGwCQeY80",
      title: "Review for publication",
      status: "open",
      _type: "tasks.task"
    });
  };

  return {
    label: "Request Review",
    onHandle: createAssignment
  };
};
