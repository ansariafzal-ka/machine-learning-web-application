import File_Input from "../File_Input";
import Dropdown from "../Dropdown";
import { useState } from "react";

const Home = () => {
  const [model_type, setModelType] = useState("linear_regression");

  return (
    <main className="w-full h-screen p-10 bg-gray-100 flex flex-col gap-4">
      <div className="p-5 bg-white flex flex-col justify-start items-center gap-5 lg:flex-row rounded-lg border shadow">
        <h1 className="text-2xl font-medium">Machine Learning Project</h1>
        <Dropdown
          options={[
            "linear_regression",
            "logistic_regression",
            "decision_tree",
            "knn",
            "naive_bayes",
          ]}
          setModelType={setModelType}
        />
      </div>
      <div className="h-[300px] p-5 bg-white flex justify-center items-center rounded-lg border shadow">
        <File_Input model_type={model_type} />
      </div>
    </main>
  );
};

export default Home;
