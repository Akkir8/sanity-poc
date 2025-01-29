import { defineField, defineType } from "sanity";

export const richTextType = defineType({
  name: "richTextComponent",
  title: "Rich Text Coponent",
  type: "object",
  fields: [
    defineField({
      name: "richText",
      type: "array",
      title: "richText",
      of: [{type : 'block'}]
    }),
  ],
});