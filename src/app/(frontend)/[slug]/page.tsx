/* eslint-disable */
import { PageBuilder } from "@/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Pages({ params }: { params: { slug: string } }) {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params,
  });

  return page?.content ? <PageBuilder content={page?.content} /> : null;
}
