import { defineField, defineType } from "sanity";
import { ControlsIcon } from "@sanity/icons";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: ControlsIcon,
  groups: [
    {
      default: true,
      name: 'homePage',
      title: 'Home Page',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: "homePage",
      type: "reference",
      to: [{ type: "home" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});