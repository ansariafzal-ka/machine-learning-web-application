import React from "react";

const File_Input = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <label
        class="block mb-2 text-sm font-medium text-gray-900"
        for="file_input"
      >
        <h1 className="text-xl font-medium">Upload File</h1>
      </label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
        id="file_input"
        type="file"
      />
    </main>
  );
};

export default File_Input;
