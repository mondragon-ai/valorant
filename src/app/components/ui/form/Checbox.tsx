"use client";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import styles from "../UI.module.css";

interface CheckboxProps {
  label: string;
  name: string;
  formData: {[key: string]: any};
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  formData,
  setFormData,
  required = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        id={name}
        checked={formData[name]}
        onChange={handleChange}
        required={required}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
