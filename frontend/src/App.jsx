import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Predict from "./components/pages/Predict";
import Predictions from "./components/pages/Predictions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </Router>
  );
};

export default App;
