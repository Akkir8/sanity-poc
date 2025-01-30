import { LinkIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  title: "Internal Link",
  name: "annotationLinkInternal",
  type: "object",
  icon: LinkIcon,
  components: {
    annotation: (props) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: "0.05em",
            marginRight: "0.1em",
            width: "0.75em",
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (rule) => rule.required(),
      to: [{ type: "page" }],
    },
  ],
});
