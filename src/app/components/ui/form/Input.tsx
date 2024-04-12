"use client";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import styles from "../UI.module.css";

export const Input = ({
  label,
  name,
  formData,
  setFormData,
  required = false,
}: {
  name: string;
  label: string;
  formData: {[key: string]: any};
  setFormData: Dispatch<SetStateAction<any>>;
  required: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;
    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (value !== "") {
      setFocused(true);
    }
    if (required && formData[name] !== "") {
      setError("");
    }
  };

  const handleBlur = () => {
    setFocused(false);
    if (formData[name] !== "") {
      setFocused(true);
    }
    if (required && formData[name] === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  return (
    <div className={styles.input}>
      <label className={`${styles.label} ${focused ? styles.labelActive : ""}`}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={(e) => handleChange(e)}
        placeholder=" "
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
      />
    </div>
  );
};
