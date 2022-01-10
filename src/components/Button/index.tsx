import React from "react";

export type ButtonProps = {
  label: string;
  color?: "primary" | "secondary" | "default";
};

const Button = ({ label, color = "default" }: ButtonProps) => {
  /* bg-${color}-600 not allowed.
   * The purge feature for Tailwind looks for the full text of classes and removes ones it doesn't find.
   * Because the text is being assembled in the code,
   * it's not finding bg-primary anywhere and not including that in the CSS it builds.*/
  const primaryColor = "bg-indigo-600 hover:bg-indigo-700";
  const secondaryColor = "bg-teal-600 hover:bg-teal-700";
  const defaultColor = "bg-gray-600 hover:bg-gray-700";

  const customColor =
    color === "primary"
      ? primaryColor
      : color === "secondary"
      ? secondaryColor
      : defaultColor;

  return (
    <button
      className={`inline-flex items-center justify-center px-5 py-3 border 
      border-transparent text-base font-medium rounded-md text-white ${customColor}`}
    >
      {label}
    </button>
  );
};

export default Button;
