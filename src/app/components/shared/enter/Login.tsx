"use client";
import {useState} from "react";
import {Input} from "../../ui/form/Input";
import styles from "../Shared.module.css";
import {Button} from "../../ui/Button";
import Checkbox from "../../ui/form/Checbox";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    remember: false,
  });

  const handleLogIn = () => {
    alert("Logged In");
  };

  return (
    <form className={styles.formWrapper}>
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
      <Checkbox
        label={"Remember Me"}
        name={"remember"}
        formData={formData}
        setFormData={setFormData}
      />
      <Button text={"Sign In"} callback={handleLogIn} />
      <span>
        {" "}
        Not a member? <a href="">Sign up</a>
      </span>
    </form>
  );
}
