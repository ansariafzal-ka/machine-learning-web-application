const Dropdown = () => {
  return (
    <select className="w-[300px] border border-gray-400 rounded focus:border-gray-300 p-2">
      <option value="linear_regression" className="hover:bg-purple-700">
        Linear Regression
      </option>
      <option value="logistic_regression">Logistic Regression</option>
      <option value="decision_tree">Decision Tree</option>
      <option value="knn">knn</option>
      <option value="naive_bayes">Naive Bayes</option>
    </select>
  );
};

export default Dropdown;
