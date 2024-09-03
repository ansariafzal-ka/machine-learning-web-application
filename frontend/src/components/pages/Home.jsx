import File_Input from "../File_Input";
import Dropdown from "../Dropdown";
import { useState } from "react";
import Button from "../Button";

const Home = () => {
  const [isUpLoaded, setisUpLoaded] = useState(false);
  return (
    <main className="flex flex-col p-10 pt-20 gap-8">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-3xl font-medium">Machine Learning Project</h1>
        <Dropdown />
        <Dropdown />
      </div>
      <div className="flex w-full justify-center items-center border border-gray-500 rounded-xl p-6 gap-4">
        {!isUpLoaded ? <File_Input /> : <Button>train model</Button>}
      </div>
    </main>
  );
};

export default Home;
