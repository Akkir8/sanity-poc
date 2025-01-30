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
      name: 'navigation',
      title: 'Navigation',
    },
  ],
  fields: [
    defineField({
      name: "homePage",
      type: "reference",
      to: [{ type: "home" }],
      group: "homePage"
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'object',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Links
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {type: 'linkInternal'},
            {type: 'linkExternal'},
          ],
        }),
      ],
    }),
     defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        // Links
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        }),
      ],
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