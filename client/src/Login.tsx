import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "@/components/Form/Form";
import FormField from "@/components/Form/Field/FormField";
import Input from "@/components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("");
  const [pwd, setPwd] = useState("");
  const [reg, setReg] = useState("");
  const { handleSubmit, register } = useForm();

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
  };
  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const handleRegChange = (e) => {
    setReg(e.target.value);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleLogin = () => {
    const newData = {
      regNo: reg,
      password: pwd,
    };
    console.log();
    const apiUrl = `http://localhost:8000/api/v1/${selectedUserType}/auth/login`;

    axios
      .post(apiUrl, newData)
      .then((response) => {
        console.log(response.data);
        // Assuming successful response contains token
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);

        // Perform necessary actions with the token
        navigate("/smenu");
      })
      .catch((error) => {
        console.log(error);
        // Display an alert for incorrect credentials
        alert("Incorrect credentials");
      });
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
          <label>
            <input
              type="radio"
              name="userType"
              value="warden"
              checked={selectedUserType === "warden"}
              onChange={handleUserTypeChange}
            />
            Warden
          </label>
        </div>
      </div>

      <Form onSubmit={handleSubmit(handleLogin)}>
        <FormField label="Reg No" name="regNo">
          <input type="text" value={reg} onChange={handleRegChange} />
        </FormField>

        <FormField label="Password" name="password">
          <input type="password" value={pwd} onChange={handlePwdChange} />
        </FormField>

        <div>
          <Button type="submit">Submit</Button>
          <Button onClick={handleGoBack}>Go Back</Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
