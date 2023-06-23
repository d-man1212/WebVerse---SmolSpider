import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

const PostMessDetailsPage = () => {
  const navigate = useNavigate();

  const handleMessDetails = () => {
    navigate("/smess");
  };

  const handleUpdateMess = () => {
    navigate("/sumess");
  };

  const handleGoBack = () => {
    navigate("/smenu");
  };

  return (
    <div>
      <h2>Post Mess Details Page</h2>
      <Button onClick={handleMessDetails}>Mess Details</Button>
      <Button onClick={handleUpdateMess}>Update Mess</Button>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default PostMessDetailsPage;
