import React from "react";

const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="text-white bg-violet-600 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
    >
      {children}
    </button>
  );
};

export default Button;
