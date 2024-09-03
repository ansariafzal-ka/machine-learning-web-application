const Dropdown = ({ options, setModelType }) => {
  const handleChange = (e) => {
    setModelType(e.target.value);
  };
  return (
    <select
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded focus:border-gray-500 cursor-pointer outline-none lg:w-[300px]"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
