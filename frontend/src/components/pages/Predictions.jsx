import { Link } from "react-router-dom";
const Predictions = () => {
  return (
    <main className="w-full h-screen p-10 bg-gray-100 flex flex-col gap-4">
      <div className="p-5 bg-white flex flex-col justify-start items-center gap-5 lg:flex-row rounded-lg border shadow">
        <Link to={"/"} className="text-2xl font-medium">
          Machine Learning Project
        </Link>
      </div>
      <div className="w-full p-6 bg-white flex flex-col justify-center items-start gap-4 border rounded-lg shadow">
        <h1 className="text-xl font-medium">Predictions</h1>
        <hr className="w-full" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          dignissimos rem voluptatem veritatis nihil inventore cupiditate
          facilis perspiciatis reprehenderit consequuntur accusantium vitae
          voluptatibus illum, quam vero, culpa expedita similique earum?
        </p>
      </div>
    </main>
  );
};

export default Predictions;
