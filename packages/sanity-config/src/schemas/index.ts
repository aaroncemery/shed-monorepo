import { SchemaTypeDefinition } from "sanity";
import { objectsSchemas } from "./objects";
import { blocksSchemas } from "./blocks";
import { documentsSchemas } from "./documents";
import { homepageSchema } from "./Homepage";
export const sharedSchemas: SchemaTypeDefinition[] = [
  ...objectsSchemas,
  ...blocksSchemas,
  ...documentsSchemas,
  homepageSchema
];
