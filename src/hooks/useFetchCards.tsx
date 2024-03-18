import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducers";
import { productType } from "../types/types";
import { fetchCards } from "../service/shoppingCardServices";
import { fetchCardAction } from "../redux/cardSlices/action";

type CardType = {
  cardData: productType[];
  isLoading: boolean;
};

const useFetchCards = (): CardType => {
  const [isLoading, setIsLoading] = useState(true);
  const cardData = useSelector((state: RootState) => state.cards.items);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrdersData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCards();
        dispatch(fetchCardAction(response));
      } catch (error) {
        console.error("Error fetching card:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrdersData();

    return () => {};
  }, [dispatch]);

  return { cardData, isLoading };
};

export default useFetchCards;
