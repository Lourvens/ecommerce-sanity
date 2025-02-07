"use client";

import React from "react";
import { Button } from "../../../../components/ui/button";
import { TrolleyIcon } from "@sanity/icons";
import { Product } from "../../../../../sanity.types";
import { useBasketStore } from "@/app/(store)/store";

interface AddToBasketProps {
  product: Product;
}

const AddToBasket = ({ product }: AddToBasketProps) => {
  const { addItem } = useBasketStore();
  return (
    <Button
      className="rounded-lg shadow-md py-6"
      onClick={() => {
        addItem(product);
      }}
    >
      <TrolleyIcon />
      <span>Ajoutel nan panye</span>
    </Button>
  );
};

export default AddToBasket;
