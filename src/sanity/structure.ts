import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ecommerce - shoper")
    .items([
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post", "author"].includes(item.getId()!)
      ),
    ]);
