"use client";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import {Input} from "../../ui/form/Input";
import styles from "../Shared.module.css";
import {Button} from "../../ui/Button";
import Checkbox from "../../ui/form/Checbox";
import {useRouter} from "next/navigation";
import {serverApiRequest} from "@/third-party-apis/server";
import {error} from "console";

export default function LoginForm({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    remember: false,
  });

  const handleLogIn = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const {status} = await serverApiRequest("/auth/login", "POST", formData);
    if (status === 200) {
      setFormData({
        password: "",
        email: "",
        remember: false,
      });
      router.push("/dashboard");
    } else if (status === 500) {
      setError("Try again ater");
    } else if (status === 422) {
      setError("Cannot locate email. Register email.");
    } else if (status === 403 || status === 401) {
      setError("Unathorized. Email or passsword doesn't match");
    }
    setFormData({
      password: "",
      email: "",
      remember: false,
    });
  };
  return (
    <form className={styles.formWrapper}>
      {error && error !== "" ? (
        <small style={{color: "#6b2b2b", padding: " 0 0 10px 5px"}}>
          {error}
        </small>
      ) : (
        <small>&nbsp;</small>
      )}
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
