"use client";
import React from "react";
import { Button } from "../ui/button";
import { Product } from "../../../sanity.types";
import { useBasketStore } from "@/app/(store)/store";
import clsx from "clsx";

interface AddToBasketProps {
  product: Product;
  small?: boolean;
}

const AddToBasketButton = ({ product, small }: AddToBasketProps) => {
  const { addItem, getItemCount, decrementItem } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = React.useState(false);

  // This is a hack to prevent the button from rendering on the server
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={() => decrementItem(product._id)}
        size={"icon"}
        type="button"
        className={clsx(
          "text-black bg-gray-300 font-bold hover:bg-gray-400 rounded-full",
          { "w-5 h-5": small }
        )}
      >
        -
      </Button>
      <span className={clsx(`w-8 text-center`, { "w-4 text-xs": small })}>
        {itemCount}
      </span>
      <Button
        variant="default"
        onClick={() => addItem(product)}
        size={"icon"}
        className={clsx("rounded-full", { "w-5 h-5": small })}
        type="button"
      >
        +
      </Button>
    </div>
  );
};

export default AddToBasketButton;
