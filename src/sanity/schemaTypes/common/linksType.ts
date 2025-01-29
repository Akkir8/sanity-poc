import { defineField, defineType } from "sanity";

export const linksType = defineType({
  name: "linkComponent",
  title: "Link Component",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
        name: "url",
        type: "url",
        title: "URL",
      })
  ],
});