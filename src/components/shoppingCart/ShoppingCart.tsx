import React, { FC } from "react";
import useFetchCards from "../../hooks/useFetchCards";
import CardList from "../card/CardList";

const ShoppingCart: FC = () => {
  const { cardData } = useFetchCards();

  return <CardList products={cardData} />;
};

export default ShoppingCart;
