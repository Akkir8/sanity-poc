import { defineField, defineType } from "sanity";
import { LayoutTemplate } from "lucide-react";
import { YouTubePreview } from "../previews/youtube-preview";

export default defineType({
  name: "youtube",
  title: "Youtube Component",
  type: "object",
  icon: LayoutTemplate,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
        name: "videoId",
        title: "Video ID",
        type: "string",
        description: "YouTube Video ID",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Youtube",
        subtitle: title,
      };
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
