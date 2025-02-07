import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

export const getSingleProduct = async (slug: string) => {
  const SINGLE_PRODUCT_QUERY = defineQuery(
    `*[_type == "product" && slug.current == $slug][0]`
  );
  const params = { slug };

  try {
    const products = await sanityFetch({
      query: SINGLE_PRODUCT_QUERY,
      params,
    });

    return products.data || null;
  } catch (e) {
    console.log("Error: ", e);
    return null;
  }
};
