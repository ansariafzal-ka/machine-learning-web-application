const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="text-white bg-violet-600 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      {children}
    </button>
  );
};

export default Button;
