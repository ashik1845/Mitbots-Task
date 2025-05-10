import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cards from "./Cards";
import Offerscroll from "./Offerscroll";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/offerscroll" element={<Offerscroll />} />
      </Routes>
    </Router>
  );
};

export default App;
