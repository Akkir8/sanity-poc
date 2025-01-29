import { defineField, defineType } from "sanity";

export const imageType = defineType({
  name: "imageComponent",
  title: "Image Component",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot : true
      }
    }),
  ],
});