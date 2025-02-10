import Image from "next/image";
import { Product } from "../../../../../sanity.types";
import { getUrl } from "@/lib/getUrl";
import { EyeOpenIcon } from "@sanity/icons";
import { PortableText } from "next-sanity";
import Link from "next/link";
import AddToBasket from "./addToBasket";
import { Button } from "../../../../components/ui/button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full max-w-sm bg-gray-50 rounded-xl shadow-md overflow-hidden mx-auto transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative bg-gray-200 p-4">
        {product.image && (
          <Image
            src={getUrl(product.image).url()}
            alt={product.name || "Product Image"}
            width={350}
            height={400}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h2>

        <div className="text-sm text-gray-700 h-16 overflow-hidden">
          {product.description ? (
            <PortableText value={product.description} />
          ) : (
            <p>Pa gen deskripsyon disponib pou pwodwi sa</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-indigo-600">
            ${product.price}
          </span>
          <span
            className={`text-sm ${product.stock! > 0 ? "text-gray-600" : "text-red-500"}`}
          >
            {product.stock! > 0
              ? `Stock: (${product.stock})`
              : "Rupture de stock"}
          </span>
        </div>
        <div className="flex gap-3">
          <AddToBasket product={product} />
          <Button
            className="rounded-lg py-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all shadow-md"
            asChild
          >
            <Link href={`/product/${product.slug?.current}`}>
              <EyeOpenIcon />
              <span>Plis detay</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
