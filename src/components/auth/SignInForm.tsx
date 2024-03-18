import React, { FC, useState, ChangeEvent } from "react";
import InputField from "./InputField";
import { signInField } from "./fieldValues";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/authSlices/action";
import { login } from "../../service/authService";
import { LoginUserType } from "../../types/types";
import { useNavigate } from "react-router-dom";

const SignInForm: FC = () => {
  const [formData, setFormData] = useState<LoginUserType>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const userData = await login(formData);
      console.log(userData, "userData");

      if (userData.user) {
        navigate("/Home");
        dispatch(loginAction(formData));
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {signInField.map((field) => (
        <InputField
          key={field.name}
          userField={field}
          handleChange={handleChange}
          value={formData[field.name as keyof LoginUserType] ?? ""}
        />
      ))}
      <button className="G-btn" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
