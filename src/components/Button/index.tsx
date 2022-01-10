import React from "react";

export type ButtonProps = {
  label: string;
  color?: string;
  backgroundColor?: string;
};

const Button = ({
  label,
  color = "white",
  backgroundColor = "indigo",
}: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-3 border 
      border-transparent text-base font-medium rounded-md
       text-${color} bg-${backgroundColor}-600 hover:bg-${backgroundColor}-700`}
    >
      {label}
    </button>
  );
};

export default Button;
