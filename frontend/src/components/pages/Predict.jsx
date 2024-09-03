import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [data, setData] = useState("");
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let parsedData;
    try {
      parsedData = JSON.parse(data);

      if (
        !Array.isArray(parsedData) ||
        !parsedData.every(
          (arr) =>
            Array.isArray(arr) && arr.every((item) => typeof item === "number")
        )
      ) {
        throw new Error(
          "Input data must be an array of arrays containing only numbers (int or float)."
        );
      }
    } catch (error) {
      console.error("Invalid input format:", error);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/machine-learning/predict",
        parsedData
      );
      setPredictions(response.data.predictions);
      console.log("predictions : ", response.data);
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  };

  return (
    <main className="w-full h-screen p-10 bg-gray-100 flex flex-col gap-4">
      <div className="p-5 bg-white flex flex-col justify-start items-center gap-5 lg:flex-row rounded-lg border shadow">
        <Link to={"/"} className="text-2xl font-medium">
          Machine Learning Project
        </Link>
      </div>
      <div className="w-full p-6 bg-white flex flex-col justify-center items-start gap-4 border rounded-lg shadow">
        <h1 className="text-xl font-medium text-green-500">
          Model Trained Successfully : 200
        </h1>
        <hr className="w-full" />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-start gap-4"
        >
          <label className="text-xl font-medium">Make Predictions</label>
          <p className="text-red-600 italic">{error}</p>
          {predictions && (
            <div>
              <h1 className="text-xl font-medium mb-1">Predictions</h1>
              {predictions.map((prediction, index) => (
                <p key={index} className="italic">
                  {prediction}
                </p>
              ))}
            </div>
          )}
          <Input
            type={"text"}
            value={data}
            onChange={handleInputChange}
            placeholder={`Enter data as JSON: e.g. [[2], [3.3], [5.4]] or [[14.3, 33.3]]`}
          />
          <Button type="submit">Make Predictions</Button>
        </form>
      </div>
    </main>
  );
};

export default Predict;
