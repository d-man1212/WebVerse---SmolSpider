import Form from "@/components/Form/Form";
import FormField from "@/components/Form/Field/FormField";
import Input from "@/components/Input/Input";
import { UseFormReturn } from "react-hook-form";
import Button from "@/components/Button/Button";

export const initialFormData = {
  regNo: "",
  block: "",
  roomNo: "",
  name: "",
  password: "",
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
        label="Registration Number:"
        name="regNo"
        options={{
          required: "Enter your registration number of 9 characters",
        }}
      >
        <Input />
      </FormField>
      <FormField
        label="Block:"
        name="block"
        options={{
          required: "Enter your block (A,B,C,D)",
        }}
      >
        <Input />
      </FormField>
      <FormField
        label="Room Number:"
        name="roomNo"
        options={{
          required: "Enter your room number",
        }}
      >
        <Input />
      </FormField>
      <FormField
        label="Name:"
        name="name"
        options={{
          required: "Enter your name of min 3 characters",
        }}
      >
        <Input />
      </FormField>
      <FormField
        label="Password:"
        name="password"
        options={{
          required: "Enter your password of min 8 characters",
        }}
      >
        <Input type="password" />
      </FormField>

      <FormField>
        <Button>Submit</Button>
      </FormField>
    </Form>
  );
};

export default SignupForm;
