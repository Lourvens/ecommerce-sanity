import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { ProductType } from "./productType";
import { orderType } from "./orderType";
import { SalesType } from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, ProductType, orderType, SalesType],
};
