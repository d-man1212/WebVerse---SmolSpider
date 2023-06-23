import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

const WardenDetails = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const apiUrl = "http://localhost:8000/api/v1/student/leave/";

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserDetails(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Handle error condition
        setIsLoading(false);
      });
  }, []);

  const handleGoBack = () => {
    navigate("/smenu");
  };

  return (
    <div>
      <h2>Hello Student</h2>
      {isLoading ? (
        <p>Loading user details...</p>
      ) : (
        <>
          {userDetails && (
            <div>
              <pre>{JSON.stringify(userDetails["data"], null, 2)}</pre>
            </div>
          )}
          {!userDetails && <p>Failed to fetch user details.</p>}
        </>
      )}
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default WardenDetails;
