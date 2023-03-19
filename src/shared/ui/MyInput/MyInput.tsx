import React from "react";
import styles from "./MyInput.module.css";

interface MyInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({
  variant = "standard",
  onChange,
  ...props
}: MyInputProps) {
  return (
    <input
      {...props}
      className={`${styles.Input} ${styles[variant]}`}
      onChange={onChange}
    ></input>
  );
}
