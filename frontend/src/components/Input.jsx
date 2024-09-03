import React from "react";

const Input = () => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-xl font-medium">Make Predictions</label>
      <input
        type="text"
        id="input"
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter some data to make prediction"
        required
      />
    </div>
  );
};

export default Input;
