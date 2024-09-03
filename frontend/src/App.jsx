import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Predict from "./components/pages/Predict";
import Prediction from "./components/pages/Prediction";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </Router>
  );
};

export default App;
