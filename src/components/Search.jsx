import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const [input, setinput] = useState("");
  let navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    } else {
      navigate("/Searched/" + input);
    }
  };
  return (
    <div className="formCont">
      <form onSubmit={searchHandler} className="form">
        <input
          type="text"
          onChange={(e) => {
            setinput(e.target.value);
          }}
          value={input}
          placeholder="Search"
        />
        <FaSearch />
      </form>
    </div>
  );
};

export default Search;
