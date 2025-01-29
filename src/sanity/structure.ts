import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Food Blog")
    .items([
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.divider(),
      S.listItem()
      .id("siteSettings")
      .schemaType("siteSettings")
      .title("Site Settings")
      .child(
        S.editor()
          .id("siteSettings")
          .schemaType("siteSettings")
          .documentId("siteSettings")
      ),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["home","page", "faq", "siteSettings"].includes(item.getId()!)
      ),
    ]);