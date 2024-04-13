"use client";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import {Input} from "../../ui/form/Input";
import styles from "../Shared.module.css";
import {Button} from "../../ui/Button";
import {useRouter} from "next/navigation";

export default function RegisterForm({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    email: "",
    first_name: "",
    remember: false,
  });

  const handleLogIn = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    alert("Regsiter In -> RSO + Redirect");
    router.push("/dashboard");
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
        type={"password"}
        name="password"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="Confirm Password"
        required={true}
        type={"password"}
        name="confirm_password"
        formData={formData}
        setFormData={setFormData}
      />
      <Button text={"Register"} callback={handleLogIn} />
      <span>
        {" "}
        Already a member?{" "}
        <span style={{color: "white"}} onClick={() => setForm(true)}>
          Sign In
        </span>
      </span>
    </form>
  );
}
