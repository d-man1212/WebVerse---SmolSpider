import React from "react";
import { UseFormReturn } from "react-hook-form";
import Form from "@/components/Form/Form";
import FormField from "@/components/Form/Field/FormField";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export const initialFormData = {
  name: "",
  empId: "",
  password: "",
  isHOD: "",
};

export type SignupFormData = typeof initialFormData;

interface SignupFormProps {
  form: UseFormReturn<SignupFormData>;
  onSubmit: (data: SignupFormData) => void;
}

const SignupForm = ({ form, onSubmit }: SignupFormProps) => {
  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormField
        label="Name:"
        name="name"
        options={{
          required: "Enter your name",
        }}
      >
        <Input />
      </FormField>
      <FormField
        label="Employee ID:"
        name="empId"
        options={{
          required: "Enter your employee ID",
        }}
      >
        <Input />
      </FormField>
      <FormField
        label="Password:"
        name="password"
        options={{
          required: "Enter your password",
        }}
      >
        <Input type="password" />
      </FormField>
      <FormField
        label="Is HOD:"
        name="isHOD"
        options={{
          required: "Enter if you are an HOD",
        }}
      >
        <Input />
      </FormField>

      <FormField>
        <Button>Submit</Button>
      </FormField>
    </Form>
  );
};

export default SignupForm;
