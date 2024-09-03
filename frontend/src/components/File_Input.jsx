import Button from "./Button";

const File_Input = () => {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center gap-2">
      <form className="p-3 flex justify-center items-center gap-2 border rounded-lg">
        <input
          className="w-full text-gray-900 cursor-pointer focus:outline-none"
          id="file_input"
          type="file"
          required
        />
        <Button type="submit">upload</Button>
      </form>
    </div>
  );
};

export default File_Input;
