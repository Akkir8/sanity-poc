import { defineField, defineType } from "sanity";

export const textType = defineType({
  name: "textComponent",
  title: "Text Coponent",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "text",
      title: "text"
    }),
  ],
});