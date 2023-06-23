import React, { useState, lazy, Suspense } from "react";
import { useForm } from "react-hook-form";
import SignupForm, { initialFormData } from "../../Student/Signup/SignupForm";
const SignupPreview = lazy(() => import("../../Student/Signup/SignupPreview"));

const Signup = () => {
  const form = useForm({
    defaultValues: initialFormData,
  });
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setAlertType("");
    setAlertMessage("");

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/faculty/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.getValues()),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setAlertType("success");
        setAlertMessage("Registration successful!");
      } else {
        setAlertType("error");
        setAlertMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      console.log(error);
      setAlertType("error");
      setAlertMessage("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showPreview ? (
        <Suspense fallback={"Loading..."}>
          <SignupPreview
            signupFormData={form.getValues()}
            onGoBack={() => setShowPreview(false)}
            onConfirm={handleSubmit}
          />
        </Suspense>
      ) : (
        <SignupForm form={form} onSubmit={() => setShowPreview(true)} />
      )}

      {loading && <div>Loading...</div>}

      {alertType && (
        <div
          style={{
            backgroundColor: alertType === "success" ? "green" : "red",
            color: "white",
            padding: "10px",
          }}
        >
          {alertMessage}
        </div>
      )}
    </>
  );
};

export default Signup;
