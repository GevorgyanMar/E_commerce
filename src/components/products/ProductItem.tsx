import React, { FC } from "react";
import { productType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import Image from "../Image/Image";
import { addToCard } from "../../service/shoppingCardServices";

interface Props {
  product: productType;
}

const ProductItem: FC<Props> = ({ product }) => {
  const { title, imageUrl, description, count, price, id } = product;
  const navigate = useNavigate();

  const handleAddToCart = async (product: productType) => {
    try {
      await addToCard(product);
    } catch (error) {}
  };

  const handleDetailsClick = (id: number) => {
    navigate(`/Product/${id}`);
  };

  return (
    <div className="product-item" key={id}>
      <Image src={imageUrl} alt={title} />
      <h2>title: {title}</h2>
      <p>description:{description}</p>
      <p>Count: {count}</p>
      <p>Price: ${price}</p>
      <div className="btn-flex">
        <button
          className="add-to-cart-button"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
        <button className="G-btn" onClick={() => handleDetailsClick(id)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
