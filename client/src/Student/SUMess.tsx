import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@/components/Button/Button";

const ChangeMessPage = () => {
  const navigate = useNavigate();
  const [newMess, setNewMess] = useState("");

  const handleInputChange = (event) => {
    setNewMess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const apiUrl = "http://localhost:8000/api/v1/student/mess-details";

    const updatedMess = {
      messType: newMess,
    };

    axios
      .put(apiUrl, updatedMess, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response.data);
        navigate("/smenu");
      })
      .catch((error) => {
        // Handle error condition
        console.log(error);
      });
  };

  const handleGoBack = () => {
    navigate("/smenu");
  };

  return (
    <div>
      <h2>Change Mess Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="messInput">New Mess:</label>
        <input
          type="text"
          id="messInput"
          value={newMess}
          onChange={handleInputChange}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default ChangeMessPage;
