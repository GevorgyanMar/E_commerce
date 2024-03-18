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
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getProduct(+id!);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const { imageUrl, title, description, count, price } = product as productType;

  const [countValue, setCountValue] = useState(product.count);
  const handleAddToCart = async (product: productType) => {
    try {
      await addToCard(product);
    } catch (error) {}
  };

  const updateQuantity = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    setCountValue(Number(e.target.value));
    dispatch(updateQuantityAction({ count, id }));
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
