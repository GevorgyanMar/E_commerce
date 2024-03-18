import React, { ChangeEvent, FC, useState } from "react";
import Image from "../Image/Image";
import { productType } from "../../types/types";
import { addToOrderItems } from "../../service/orderServices";
import { removeFromCard } from "../../service/shoppingCardServices";
import { useDispatch } from "react-redux";
import { removeCartAction } from "../../redux/cardSlices/action";
import { updateQuantityAction } from "../../redux/ordersSlices/action";

type Props = {
  product: productType;
};

const Card: FC<Props> = ({ product }) => {
  const { title, imageUrl, description, count, price, id } = product;
  const [countValue, setCountValue] = useState(count);
  const dispatch = useDispatch();

  const updateQuantity = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    setCountValue(Number(e.target.value));
    dispatch(updateQuantityAction({ count, id }));
  };

  const orderRemoveHandler = async (id: number) => {
    await removeFromCard(id).then((res) => {
      dispatch(removeCartAction(id));
    });
  };
  const orderHandler = async (id: number) => {
    await addToOrderItems(id, product);
    alert("The purchase was successful");
  };
  return (
    <div className="product-item" key={id}>
      <Image src={imageUrl} alt={title} />
      <h2>title: {title}</h2>
      <p>description:{description}</p>
      <input
        type="number"
        value={countValue}
        onChange={(e) => updateQuantity(id, e)}
      />
      <p>Price: ${price}</p>
      <div className="btn-flex">
        <button className="G-btn" onClick={() => orderHandler(id)}>
          Buy
        </button>
        <button className="G-btn" onClick={() => orderRemoveHandler(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
