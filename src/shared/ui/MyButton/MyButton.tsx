import React from "react";
import styles from "./MyButton.module.css";

interface MyButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}

export default function MyButton({
  className = "",
  variant = "standart",
  children,
  disabled,
  ...props
}: MyButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.Button} ${styles[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
