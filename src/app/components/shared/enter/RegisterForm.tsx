"use client";
import {Dispatch, SetStateAction, useState} from "react";
import {Input} from "../../ui/form/Input";
import styles from "../Shared.module.css";
import {Button} from "../../ui/Button";

export default function RegisterForm({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) {
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    email: "",
    first_name: "",
    remember: false,
  });

  const handleLogIn = () => {
    alert("Regsiter In");
  };

  return (
    <form className={styles.formWrapper}>
      <Input
        label="First Name"
        required={true}
        name="first_name"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="Email"
        required={true}
        name="email"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="Password"
        required={true}
        name="password"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="Confirm Password"
        required={true}
        name="confirm_password"
        formData={formData}
        setFormData={setFormData}
      />
      <Button text={"Register"} callback={handleLogIn} />
      <span>
        {" "}
        Already a member? <span onClick={() => setForm(true)}>Sign In</span>
      </span>
    </form>
  );
}
