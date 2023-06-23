import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import SSignup from "./Student/Signup/Signup";
// import FSignup from "./Faculty/Signup/Signup";
// import WSignup from "./Warden/Signup/Signup";

const Registration = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h2>Select User Type:</h2>
        <div>
          <label>
            <input
              type="radio"
              name="userType"
              value="student"
              checked={selectedUserType === "student"}
              onChange={handleUserTypeChange}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="faculty"
              checked={selectedUserType === "faculty"}
              onChange={handleUserTypeChange}
            />
            Faculty
          </label>
        </div>
      </div>

      <div>
        {selectedUserType === "student" && <SSignup />}
        {/* {selectedUserType === "faculty" && <FSignup />}*/}
      </div>

      <Button onClick={handleGoBack}>Go Back</Button>
    </>
  );
};

export default Registration;
