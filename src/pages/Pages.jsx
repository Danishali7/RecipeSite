import React from "react";
import Home from "./Home";
import Dishes from "./Dishes";
import { Routes, Route } from "react-router-dom";
import Searched from "./Searched";
import Recipedetails from "./Recipedetails";
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dishes/:type" element={<Dishes />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/Recipedetails/:id" element={<Recipedetails />} />
      </Routes>
    </div>
  );
};

export default Pages;
