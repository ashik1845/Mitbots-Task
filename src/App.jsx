import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Offerscroll from "./components/Offerscroll";
import Object from "./components/Object";
import Text from "./components/Text";
import DiffCards from "./components/DiffCards"
import  Parallax  from "./components/Parallax";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/offerscroll" element={<Offerscroll />} />
        <Route path="/object" element={<Object />} />
        <Route path="/text" element={<Text />} />
        <Route path="/diffcards" element={<DiffCards />} />
         <Route path="/parallax" element={<Parallax />} />
      </Routes>
    </Router>
  );
};

export default App;
