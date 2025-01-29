import { defineType, defineArrayMember } from "sanity";
 
export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  title: 'Page builder',
  of: [
    defineArrayMember({ type: "hero" }),
    defineArrayMember({ type: "splitImage" }),
    defineArrayMember({ type: "features" }),
    defineArrayMember({ type: "faqs" }),
    defineArrayMember({ type: "imageComponent" }),
    defineArrayMember({ type: "linkComponent" }),
    defineArrayMember({ type: "richTextComponent" }),
    defineArrayMember({ type: "textComponent" }),
  ],
});