import { groq } from "next-sanity";

export const youTubeQuery = groq`
  _type == "youtube" => {
    _type,
    title,
    videoId
  },
`;
