"use client";

import { getUrl } from "@/lib/getUrl";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
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
      {items.map((item, index) => (
        <Fragment key={item._id}>
          <div className="flex gap-3">
            {item.image && (
              <Image
                width={80}
                height={20}
                alt={item.name!}
                src={getUrl(item.image).url()}
              />
            )}
            <div>
              <h1 className="font-bold">{item.name}</h1>
              <div className="flex gap-3">
                <span className="text-blue-500">Unite: {item.price}$</span>
                <span className="text-green-600">
                  Total: {(item.price! * item.quantity).toFixed(2)}$
                </span>
              </div>
              <div className="mt-5 flex gap-x-5">
                <AddToBasketButton product={item} />
                <Button
                  className="bg-red-500 hover:bg-red-800"
                  onClick={() => removeItem(item._id)}
                >
                  <TrashIcon />
                  Retirel
                </Button>
              </div>
            </div>
          </div>
          {index < items.length - 1 && <hr />}
        </Fragment>
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
          className="border-red-700 text-red-600"
          variant={"outline"}
          onClick={() => {
            clearBasket();
          }}
          disabled={!getTotalQuantity()}
        >
          <TrashIcon />
          Vide Panye an
        </Button>
      </div>
    </div>
  );
};

export default BasketPage;
