import React from "react";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const handleRegistrationClick = () => {
    navigate("/registration");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Onboarding Page</h1>
      <Button onClick={handleRegistrationClick}>Registration</Button>
      <Button onClick={handleLoginClick}>Login</Button>
    </div>
  );
};

export default Onboarding;
