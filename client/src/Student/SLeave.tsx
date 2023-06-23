import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

const Leave = () => {
  const navigate = useNavigate();

  const leaveDetails = () => {
    navigate("/sl");
  };

  const applyLeave = () => {
    navigate("/sal");
  };

  const updateLeave = () => {
    navigate("/sul");
  };

  const deleteLeave = () => {
    navigate("/sdl");
  };

  const goBack = () => {
    navigate("/smenu");
  };

  return (
    <div>
      <h2>Hello Student</h2>
      <Button onClick={leaveDetails}>Leave Details</Button>
      <Button onClick={applyLeave}>Apply Leave</Button>
      <Button onClick={updateLeave}>Update Leave</Button>
      <Button onClick={deleteLeave}>Delete Leave</Button>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
};

export default Leave;
