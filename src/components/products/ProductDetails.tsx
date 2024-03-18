import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { productType } from "../../types/types";
import { useParams } from "react-router-dom";
import { getProduct } from "../../service/productServices";
import Image from "../Image/Image";
import { addToCard } from "../../service/shoppingCardServices";
import { useDispatch } from "react-redux";
import { updateQuantityAction } from "../../redux/ordersSlices/action";

const ProductDetails: FC = () => {
  const [product, setProduct] = useState<productType | null>(null);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const [countValue, setCountValue] = useState<number>(0);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getProduct(+id!);
        setProduct(productData);
        setCountValue(productData.count);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const { imageUrl, title, description, count, price } = product;

  const handleAddToCart = async (product: productType) => {
    try {
      await addToCard(product);
    } catch (error) {}
  };

  const updateQuantity = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCountValue(newValue);
    dispatch(updateQuantityAction({ count: newValue, id }));
  };

  return (
    <div className="product-item" key={id}>
      <Image src={imageUrl} alt={title} />
      <h2>title: {title}</h2>
      <p>description:{description}</p>
      <p>
        Count:
        <input
          type="number"
          value={countValue}
          onChange={(e) => updateQuantity(+id!, e)}
        />
      </p>
      <p>Price: ${price}</p>
      <div className="btn-flex">
        <button
          className="add-to-cart-button"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
