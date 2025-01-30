import { LinkIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  title: "Internal Link",
  name: "linkInternal",
  type: "object",
  icon: LinkIcon,
  fields: [
    // Title
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (rule) => rule.required(),
      to: [{ type: "page" }],
    },
  ],
  preview: {
    select: {
      reference: "reference",
      referenceTitle: "reference.title",
      referenceType: "reference._type",
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
      };
    },
  },
});
