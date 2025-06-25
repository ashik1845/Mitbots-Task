import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cards from "./Cards";
import Offerscroll from "./Offerscroll";
import Object from "./Object";
import Text from "./Text";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/offerscroll" element={<Offerscroll />} />
        <Route path="/object" element={<Object />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </Router>
  );
};

export default App;
