"use client";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { TrolleyIcon } from "@sanity/icons";
import { useBasketStore } from "@/app/(store)/store";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import clsx from "clsx";
import AddToBasketButton from "../ProductView/addToBasketButton";
import Image from "next/image";
import { getUrl } from "@/lib/getUrl";
import { Button } from "../ui/button";

const BasketButton = () => {
  const { getTotalQuantity, items } = useBasketStore();
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-0">
            <Link href="/basket" legacyBehavior passHref>
              <NavigationMenuLink
                className={clsx(
                  navigationMenuTriggerStyle(),
                  "bg-slate-100 hover:bg-slate-300"
                )}
              >
                <TrolleyIcon className="w-6 h-6" />
                <span>Panye&apos;m</span>
                <span className="w-6 h-6 rounded-full absolute right-0 top-0 bg-green-500 flex items-center justify-center text-white text-xs font-bold transform translate-x-1/2 -translate-y-1/4">
                  {getTotalQuantity()}
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[380px] p-6">
              {items.map((item, index) => (
                <Fragment key={item._id}>
                  <div className="flex h-12 items-center justify-between gap-4">
                    <div className="flex gap-3">
                      {item.image && (
                        <Image
                          width={20}
                          height={20}
                          alt={item.name!}
                          src={getUrl(item.image).url()}
                        />
                      )}
                      <span className="text-xs">
                        {item.name?.substring(0, 50).concat("...")}
                      </span>
                    </div>
                    <AddToBasketButton product={item} small />
                  </div>
                  {index < items.length - 1 && <hr />}
                </Fragment>
              ))}

              <div className="my-3">
                <Button className="bg-green-700" asChild>
                  <Link href={"/basket"}>ale nan meni Acha</Link>
                </Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default BasketButton;
