import { defineType, defineField } from "sanity";

export const homepageSchema = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageBuilder"
    })
  ]
});
