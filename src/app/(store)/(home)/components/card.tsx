import Image from "next/image";
import { Product } from "../../../../../sanity.types";
import { getUrl } from "@/lib/getUrl";
import { Button } from "../../../../components/ui/button";
import { EyeOpenIcon } from "@sanity/icons";
import { PortableText } from "next-sanity";
import Link from "next/link";
import AddToBasket from "./addToBasket";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-[350px] bg-slate-300 rounded-2xl shadow-lg space-y-4 overflow-hidden mx-auto">
      <div className="relative bg-slate-300 p-2">
        <div className="bg-white rounded-2xl">
          {product.image && (
            <Image
              src={getUrl(product.image).url()}
              alt="HydroSync Pro Water Bottle"
              width={350}
              height={400}
              className="w-full h-40 object-contain rounded-xl"
            />
          )}
        </div>
      </div>

      <div className="p-4 rounded-t-2xl h-[300px] bg-white flex flex-col">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className="text-sm text-gray-600 prose h-24 overflow-hidden text-ellipsis">
          {product.description ? (
            <PortableText value={product.description} />
          ) : (
            "Pa gen deskripsyon disponib pou pwodwi sa."
          )}
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Pri: ${product.price}</span>
            <span className="text-lg font-medium text-gray-600">
              Stock: ({product.stock?.toString()} disponib)
            </span>
          </div>
          <div className="flex justify-between mt-1">
            <AddToBasket product={product} />
            <Button className="rounded-lg shadow-md py-6" asChild>
              <Link href={`/product/${product.slug?.current}`}>
                <EyeOpenIcon />
                <span>plis detay</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
