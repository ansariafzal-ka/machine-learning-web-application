import React from "react";

const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      id="input"
      className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 block w-full p-2.5 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
