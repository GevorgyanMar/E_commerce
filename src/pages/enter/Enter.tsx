import React, { useState } from "react";
import SignInForm from "../../components/auth/SignInForm";
import SignUpForm from "../../components/auth/SignUpForm";

const Enter = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <div className="enter-container">
      {showLoginForm ? <SignInForm /> : <SignUpForm />}

      <button className="G-btn toggle" onClick={toggleForm}>
        {showLoginForm ? "Sign_in" : "Sign_up"}
      </button>
    </div>
  );
};

export default Enter;
