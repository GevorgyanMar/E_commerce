import React, { ChangeEvent, FC, useState } from "react";
import { signUpField } from "./fieldValues";
import InputField from "./InputField";
import { registerAction } from "../../redux/authSlices/action";
import { useDispatch } from "react-redux";
import { register } from "../../service/authService";
import { UserType } from "../../types/types";

const SignUpForm: FC = () => {
  const [formData, setFormData] = useState<UserType>({
    id: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    email: "",
    password: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = await register(formData);

      dispatch(registerAction(userData));
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {signUpField.map((field) => (
        <InputField
          key={field.name}
          userField={field}
          handleChange={handleChange}
          value={formData[field.name as keyof UserType] ?? ""}
        />
      ))}
      <button className="G-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
