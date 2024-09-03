import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

const File_Input = ({ onUpload, model_type }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model_type", model_type);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/machine-learning/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        onUpload();
        navigate("/predict");
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="h-[300px] flex flex-col justify-center items-center gap-2">
      <p className="mb-2 text-red-600 italic">{error}</p>
      <form
        onSubmit={handleSubmit}
        className="p-3 flex justify-center items-center gap-2 border rounded-lg"
      >
        <input
          className="w-full text-gray-900 cursor-pointer focus:outline-none"
          id="file_input"
          type="file"
          onChange={handleFileChange}
          required
        />
        <Button type="submit">upload</Button>
      </form>
    </div>
  );
};

export default File_Input;
