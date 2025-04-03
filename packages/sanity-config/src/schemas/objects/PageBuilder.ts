import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "heroType" }),
    defineArrayMember({ type: "splitImage" }),
    defineArrayMember({ type: "faqs" })
  ]
});
