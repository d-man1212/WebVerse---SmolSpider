import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

const PostLoginMenu = () => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/sdetails");
  };

  const handleWardenDetails = () => {
    navigate("/swdetails");
  };

  const handleLeave = () => {
    navigate("/sleave");
  };

  const handleComplaints = () => {
    navigate("/complaints");
  };

  const handleMess = () => {
    navigate("/smdetails");
  };

  const handleCourses = () => {
    navigate("/courses");
  };

  const handleEvents = () => {
    navigate("/events");
  };
  const signOut = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Hello Student</h2>
      <Button onClick={handleDetails}>Details</Button>
      <Button onClick={handleWardenDetails}>Warden Details</Button>
      <Button onClick={handleLeave}>Leave</Button>
      <Button onClick={handleComplaints}>Complaints</Button>
      <Button onClick={handleMess}>Mess</Button>
      <Button onClick={handleCourses}>Courses</Button>
      <Button onClick={handleEvents}>Events</Button>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default PostLoginMenu;
