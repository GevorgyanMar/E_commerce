import React, { FC } from "react";
import Card from "./Card";
import { productType } from "../../types/types";

type Props = {
  products: productType[];
};

const CardList: FC<Props> = ({ products }) => {
  return (
    <div className="product-flex">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardList;
