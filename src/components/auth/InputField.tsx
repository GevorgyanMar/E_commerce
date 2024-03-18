import React, { FC } from "react";

interface Field {
  name: string;
  type: string;
  placeholder: string;
}

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userField: Field;
  value: string;
}

const InputField: FC<Props> = ({ userField, handleChange, value }) => {
  const { name, type, placeholder } = userField || {};

  return (
    <div className="G-input" key={name}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
