import { defineQuery } from "next-sanity";

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  ...,
  content[]{
    ...,
    _type == "faqs" => {
      ...,
      faqs[]->
    }
  }
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  homePage->{
    ...,      
  }
}`);

export const LAYOUT_QUERY = defineQuery(`
*[_type == 'siteSettings'] | order(_updatedAt desc) [0] {
  footer {
    links[] {
      _key,
      (_type == 'linkExternal') => {
        _key,
        _type,
        newWindow,
        title,
        url
      },
      (_type == 'linkInternal') => {
        _key,
        _type,
        title,
        ...reference-> {
          (_type == "home") => {
            "slug": "/",
          },
          (_type == "page") => {
            "slug": "/" + slug.current,
          },
        }
      }
    }
  },
menu {
    links[] {
      _key,
      (_type == 'linkExternal') => {
        _key,
        _type,
        newWindow,
        title,
        url
      },
      (_type == 'linkInternal') => {
        _key,
        _type,
        title,
        ...reference-> {
          (_type == "home") => {
            "slug": "/",
          },
          (_type == "page") => {
            "slug": "/" + slug.current,
          },
        }
      }
    }
  }
  }
`);
