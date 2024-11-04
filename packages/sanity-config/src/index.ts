import { assist } from "@sanity/assist";
import { visionTool } from "@sanity/vision";
import { defineConfig, SchemaTypeDefinition, PluginOptions } from "sanity";
import { sharedSchemas } from "./schemas";
import { structureTool } from "sanity/structure";

interface CreateBaseConfigProps {
  projectId: string;
  dataset: string;
  name?: string;
  title?: string;
  additionalSchemas?: SchemaTypeDefinition[];
  additionalPlugins?: PluginOptions[];
}

export const createBaseConfig = ({
  projectId,
  dataset,
  name,
  title,
  additionalSchemas = [],
  additionalPlugins = []
}: CreateBaseConfigProps) => {
  return defineConfig({
    name: name ?? "default",
    title: title ?? "Default",
    projectId: projectId,
    dataset: dataset,
    schema: {
      types: [...sharedSchemas, ...additionalSchemas]
    },
    plugins: [structureTool(), assist(), visionTool(), ...additionalPlugins]
  });
};
