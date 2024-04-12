"use client";
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import styles from "../UI.module.css";
import {
  checkPasswordStrength,
  validateEmail,
  validateField,
} from "@/utils/forms";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";

interface InputProps {
  name: string;
  label: string;
  formData: {[key: string]: any};
  setFormData: Dispatch<SetStateAction<any>>;
  required: boolean;
  type?: "text" | "password";
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  formData,
  setFormData,
  required = false,
  type = "text",
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setPasswordVisibility] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    if (formData[name] !== "") {
      setFocused(true);
      setError("");
    }
    if (required && formData[name] === "") {
      setError("This field is required");
    }
    if (required) {
      validateField(name, formData[name], formData, setError, setFocused);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
    if (required) {
      validateField(name, value, formData, setError, setFocused);
    }
  };

  return (
    <div className={styles.input}>
      <label className={`${styles.label} ${focused ? styles.labelActive : ""}`}>
        {label}
      </label>
      {type === "password" && (
        <span
          className={styles.showPassword}
          onClick={() => setPasswordVisibility(!showPassword)}
        >
          {showPassword ? (
            <FontAwesomeIcon size="2x" icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon size="2x" icon={faEye} />
          )}
        </span>
      )}
      <input
        type={showPassword ? "text" : type}
        name={name}
        value={formData[name]}
        onChange={(e) => handleChange(e)}
        placeholder=" "
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
      />
      {required && error ? (
        <small style={{color: "#6b2b2b"}}>{error}</small>
      ) : (
        <small>&nbsp;</small>
      )}
    </div>
  );
};
