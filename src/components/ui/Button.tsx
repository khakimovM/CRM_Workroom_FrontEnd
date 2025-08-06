import "../../assets/styles/button.css";
import React, { type HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  variant,
  children,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`btn cursor-pointer ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
