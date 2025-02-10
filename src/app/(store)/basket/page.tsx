"use client";

import { getUrl } from "@/lib/getUrl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useBasketStore } from "../store";
import AddToBasketButton from "@/components/ProductView/addToBasketButton";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import Link from "next/link";

const BasketPage = () => {
  const { items, clearBasket, getTotalQuantity, removeItem } = useBasketStore();
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="px-3 grid gap-8 max-w-2xl mx-auto">
      {items.map((item) => (
        <div className="flex gap-4 border-2 rounded-xl p-4 " key={item._id}>
          {item.image && (
            <Image
              width={80}
              height={20}
              alt={item.name!}
              src={getUrl(item.image).url()}
              className="rounded-lg object-contain"
            />
          )}
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-xl text-gray-800">{item.name}</h1>
            <div className="flex gap-4">
              <span className="text-blue-600">Unite: {item.price}$</span>
              <span className="text-green-700">
                Total: {(item.price! * item.quantity).toFixed(2)}$
              </span>
            </div>
            <div className="mt-4 flex gap-x-4">
              <AddToBasketButton product={item} />
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => removeItem(item._id)}
              >
                <TrashIcon />
                Retirel
              </Button>
            </div>
          </div>
        </div>
      ))}

      {items.length == 0 && (
        <div>
          <h1 className="text-lg text-center">
            Panye an vide pou kounya, svp ale nan akey pou ka fe acha
            <Button variant={"link"} className="underline text-center" asChild>
              <Link href={"/"}>klike la pou tounen</Link>
            </Button>
          </h1>
        </div>
      )}
      <div>
        <Button
          variant={"destructive"}
          onClick={() => {
            clearBasket();
          }}
          disabled={!getTotalQuantity()}
        >
          <TrashIcon />
          Vide Panye an
        </Button>
      </div>
      <div className="mt-10 space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Resime</h2>
        <div className="grid grid-cols-2 gap-x-5 text-gray-700">
          <div className="font-semibold">Kantite Total</div>
          <div>{getTotalQuantity()}</div>
          <div className="font-semibold">Pri Total</div>
          <div className="text-green-600 font-bold">
            $
            {items
              .reduce((total, item) => total + item.price! * item.quantity, 0)
              .toFixed(2)}
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Achte Kounya
        </button>
      </div>
    </div>
  );
};

export default BasketPage;
