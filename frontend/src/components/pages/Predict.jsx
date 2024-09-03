import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
const Predict = () => {
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
        <form className="w-full flex flex-col justify-center items-start gap-4">
          <label className="text-xl font-medium">Make Predictions</label>
          <Input
            type={"text"}
            placeholder={"enter some data to make predictions"}
          />
          <Button type="submit">make prediction</Button>
        </form>
      </div>
    </main>
  );
};

export default Predict;
