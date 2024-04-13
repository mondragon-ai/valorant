"use client";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import {Input} from "../../ui/form/Input";
import styles from "../Shared.module.css";
import {Button} from "../../ui/Button";
import Checkbox from "../../ui/form/Checbox";
import {useRouter} from "next/navigation";

export default function LoginForm({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
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
        label="Email"
        required={true}
        name="email"
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="Password"
        required={false}
        type={"password"}
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
      <div className={styles.textBox}>
        <span>
          {" "}
          Not a member?{" "}
          <span style={{color: "white"}} onClick={() => setForm(false)}>
            Sign up
          </span>
        </span>
        <span> Forgot your password?</span>
      </div>
    </form>
  );
}
