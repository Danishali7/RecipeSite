import React from "react";
import { MdBreakfastDining, MdGrass } from "react-icons/md";
import { FaFish } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categoryList">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "activeLink" : "category")}
      >
        <IoMdHome />
        <span>Home</span>
      </NavLink>
      <NavLink
        to={"/Dishes/Breakfast"}
        className={({ isActive }) => (isActive ? " activeLink" : "category")}
      >
        <MdBreakfastDining />
        <span>Breakfast</span>
      </NavLink>
      <NavLink
        to={"/Dishes/Vegan"}
        className={({ isActive }) => (isActive ? " activeLink" : "category")}
      >
        <MdGrass />
        <span>Vegan</span>
      </NavLink>
      <NavLink
        to={"/Dishes/Seafood"}
        className={({ isActive }) => (isActive ? " activeLink" : "category")}
      >
        <FaFish />
        <span>Seafood</span>
      </NavLink>
      <NavLink
        to={"/Dishes/Chicken"}
        className={({ isActive }) => (isActive ? " activeLink" : "category")}
      >
        <GiChickenOven />
        <span>Chicken</span>
      </NavLink>
      <NavLink
        to={"/Dishes/Starter"}
        className={({ isActive }) => (isActive ? " activeLink" : "category")}
      >
        <BiDish />
        <span>Evening</span>
      </NavLink>
    </div>
  );
};

export default Categories;
