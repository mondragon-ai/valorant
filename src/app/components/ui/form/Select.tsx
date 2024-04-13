import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import styles from "../UI.module.css";

interface SelectProps {
  name: string;
  label: string;
  options: {label: string; value: string}[];
  formData: {[key: string]: any};
  setFormData: Dispatch<SetStateAction<any>>;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  formData,
  setFormData,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.currentTarget;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.input}>
      <label className={`${styles.label} ${styles.labelActive}`}>{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select {label}...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
