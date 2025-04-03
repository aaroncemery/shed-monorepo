import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "heroType",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "image",
      type: "image"
    })
  ]
});
