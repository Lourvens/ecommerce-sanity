import { getUrl } from "@/lib/getUrl";
import { getSingleProduct } from "@/lib/products/getSingleProduct";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import { BasketIcon, HomeIcon } from "@sanity/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToBasketButton from "@/components/ProductView/addToBasketButton";

type ParamsProps = Promise<{ slug: string }>;

// export function getProductMetadata(product: { name: string; description: string; category: string }) {
//   return {
//     title: `${product.name} | Buy Now at the Best Price`,
//     description: product.description || `Shop ${product.name} in the ${product.category} category. Get exclusive deals and fast shipping.`,
//     keywords: `${product.name}, buy ${product.name}, ${product.category}, best deals, online shopping`,
//   };
// }


const SingleProductPage = async ({ params }: { params: ParamsProps }) => {
  const { slug } = await params;
  const product = await getSingleProduct(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="px-4 flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
      <div className="bg-white shadow-lg w-[350px] h-[350px] py-4 rounded-xl mx-auto shrink-0">
        {product.image && (
          <Image
            width={350}
            height={350}
            src={getUrl(product.image).url()}
            alt={product.name!}
            className="w-full h-full object-contain rounded-xl"
          />
        )}
      </div>
      <div>
        <div>
          <h1 className="text-xl uppercase">{product.name}</h1>

          <div className="mb-3 text-md font-semibold inline-block py-1 px-3 rounded-full bg-opacity-80 outline outline-1">
            $ {product.price}
          </div>

          <div className="text-sm text-gray-600 mb-5">
            {product.description && (
              <PortableText value={product.description} />
            )}
          </div>

          <div className="flex items-center space-x-6">
            <AddToBasketButton product={product} />
            <Button>
              <BasketIcon className="text-xl" />
              Fe acha
            </Button>
          </div>
        </div>
        <hr className="my-3" />
        <div className="mx-auto">
          <Button size="lg" asChild>
            <Link href={"/"}>
              <HomeIcon fontSize={"text-2xl"} className="text-2xl" />
              Paj Akey
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
