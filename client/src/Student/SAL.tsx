import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@/components/Button/Button";

const ApplyLeavePage = () => {
  const navigate = useNavigate();
  const [leaveType, setLeaveType] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [leaveDuration, setLeaveDuration] = useState("");

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleLeaveDateChange = (e) => {
    setLeaveDate(e.target.value);
  };

  const handleLeaveTimeChange = (e) => {
    setLeaveTime(e.target.value);
  };

  const handleLeaveDurationChange = (e) => {
    setLeaveDuration(e.target.value);
  };

  const handleApplyLeave = () => {
    const token = localStorage.getItem("token");
    const apiUrl = "http://localhost:8000/api/v1/leave";

    const leaveData = {
      leaveType,
      leaveDate,
      leaveTime,
      leaveDuration,
    };

    axios
      .post(apiUrl, leaveData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // Handle success condition
      })
      .catch((error) => {
        console.log(error);
        // Handle error condition
      });
  };

  const handleGoBack = () => {
    navigate("/smenu");
  };

  return (
    <div>
      <h2>Apply Leave</h2>
      <form>
        <label>
          Leave Type:
          <input
            type="text"
            value={leaveType}
            onChange={handleLeaveTypeChange}
          />
        </label>
        <label>
          Leave Date:
          <input
            type="text"
            value={leaveDate}
            onChange={handleLeaveDateChange}
          />
        </label>
        <label>
          Leave Time:
          <input
            type="text"
            value={leaveTime}
            onChange={handleLeaveTimeChange}
          />
        </label>
        <label>
          Leave Duration:
          <input
            type="text"
            value={leaveDuration}
            onChange={handleLeaveDurationChange}
          />
        </label>
      </form>
      <Button onClick={handleApplyLeave}>Submit</Button>
      <Button onClick={handleGoBack}>Go Back</Button>
    </div>
  );
};

export default ApplyLeavePage;
