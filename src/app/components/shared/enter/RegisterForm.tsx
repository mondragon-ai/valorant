"use client";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import {Input} from "../../ui/form/Input";
import styles from "../Shared.module.css";
import {Button} from "../../ui/Button";
import {useRouter} from "next/navigation";
import {serverApiRequest} from "@/third-party-apis/server";
import {checkPasswordStrength, validateEmail} from "@/utils/forms";
import Cookies from "js-cookie";
import {useGlobalContext} from "@/lib/context/appSession";

export default function RegisterForm({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) {
  const {globalState, setGlobalState} = useGlobalContext();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
    email: "",
    first_name: "",
    remember: false,
  });

  const handleLogIn = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    setLoading(true);
    if (
      checkPasswordStrength(formData.password) &&
      formData.password == formData.confirm_password &&
      validateEmail(formData.email)
    ) {
      const {status, data} = await serverApiRequest(
        "/auth/register",
        "POST",
        formData,
      );
      if (status === 200) {
        setFormData({
          password: "",
          confirm_password: "",
          email: "",
          first_name: "",
          remember: false,
        });
        setGlobalState({
          ...globalState,
          player: {
            id: "string",
            email: formData.email || "",
            name: formData.first_name || "",
            first_name: formData.first_name || "",
          },
        });
        Cookies.set("devve_jwt", data.token);
        Cookies.set("devve_refresh_jwt", data.refresh_token);
        router.push("/dashboard");
      } else if (status === 500) {
        setError("Try again ater");
      } else if (status === 409) {
        setError("Email already in use. Log in instead");
      }
      setLoading(false);
      setFormData({
        password: "",
        confirm_password: "",
        email: "",
        first_name: "",
        remember: false,
      });
    }
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
      <Button text={"Register"} callback={handleLogIn} isLoading={isLoading} />
      <span>
        {" "}
        Already a member?{" "}
        <span
          style={{color: "white", cursor: "pointer"}}
          onClick={() => setForm(true)}
        >
          Sign In
        </span>
      </span>
    </form>
  );
}
