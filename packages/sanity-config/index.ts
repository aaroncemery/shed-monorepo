import { assist } from '@sanity/assist';
import { visionTool } from '@sanity/vision';
import { defineConfig, SchemaTypeDefinition, PluginOptions } from 'sanity';
import { sharedSchemas } from './schemas';

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
  additionalPlugins = [],
}: CreateBaseConfigProps) => {
  return defineConfig({
    name: name ?? 'default',
    title,
    projectId,
    dataset,
    schema: {
      types: [...sharedSchemas, ...additionalSchemas],
    },
    plugins: [assist(), visionTool(), ...additionalPlugins],
  });
};
