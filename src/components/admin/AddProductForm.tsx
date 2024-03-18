import React, { ChangeEvent, FC, useState } from "react";
import ProductField from "./ProductField";
import { useDispatch } from "react-redux";
import { productType } from "../../types/types";
import { productFields } from "./fileldValues";
import { addProducts } from "../../service/productServices";
import { addProductAction } from "../../redux/productSlices/action";
import { convertBase64 } from "../../utilities/utilities";

const AddProductForm: FC = () => {
  const [products, setProducts] = useState<productType>({
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    count: 0,
    price: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProducts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const allowedExtensions = ["jpg", "jpeg", "png", "svg"];

    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        const base64 = await convertBase64(file);
        setProducts((prevProducts) => ({
          ...prevProducts,
          imageUrl: base64,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addProducts(products);
      dispatch(addProductAction(products));
    } catch (error) {
      console.error("Product failed:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h1> Add Product </h1>
      <form onSubmit={handleSubmit}>
        {productFields.map((field) => (
          <ProductField
            key={field.name}
            productField={field}
            handleChange={handleChange}
            uploadImage={uploadImage}
            value={products[field.name as keyof productType] ?? ""}
          />
        ))}
        <button className="G-btn" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
