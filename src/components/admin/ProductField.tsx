import React, { FC, useState } from "react";
import { convertBase64 } from "../../utilities/utilities";

interface Field {
  name: string;
  type: string;
  placeholder: string;
}

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  productField: Field;
  value: string | number;
}

const ProductField: FC<Props> = ({
  productField,
  handleChange,
  value,
  uploadImage,
}) => {
  const { name, type, placeholder } = productField || {};

  return (
    <div className="G-product-input" key={name}>
      <label htmlFor={name}>{name}</label>
      {type === "file" ? (
        <input type={type} name={name} onChange={uploadImage} />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value || ""}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default ProductField;
