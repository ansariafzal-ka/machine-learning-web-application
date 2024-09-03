import Dropdown from "../Dropdown";

const Prediction = () => {
  return (
    <main className="flex flex-col p-10 pt-20 gap-8">
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-3xl font-medium">Machine Learning Project</h1>
        <Dropdown />
      </div>
      <div className="flex flex-col w-full justify-center items-start border border-gray-500 rounded-xl p-6 gap-4">
        <h1 className="text-xl font-medium">Prediction</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aut
          ab saepe a earum. Quaerat ex explicabo dolorem quae! Incidunt error
          sapiente in cumque nulla consectetur, eveniet enim dolorem odio. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia,
          libero doloribus saepe ipsa pariatur id recusandae. Omnis, excepturi
          ipsum architecto similique veniam labore libero illo reiciendis velit
          ut voluptate!
        </p>
      </div>
    </main>
  );
};

export default Prediction;
