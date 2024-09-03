import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";
const Predict = () => {
  return (
    <main className="flex flex-col p-10 pt-20 gap-8">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-3xl font-medium">Machine Learning Project</h1>
        <Dropdown />
        <Dropdown />
      </div>
      <div className="flex flex-col w-full justify-center items-start border border-gray-500 rounded-xl p-6 gap-4">
        <h1 className="text-xl font-medium">Model Trained Successfully</h1>
        <h1 className="text-xl font-sm text-gray-500">accuracy: 0.98746</h1>
        <hr className="w-full" />
        <Input />
        <Button>make prediction</Button>
      </div>
    </main>
  );
};

export default Predict;
