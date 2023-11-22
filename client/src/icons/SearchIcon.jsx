import React from "react";
import { IoIosSearch } from "react-icons/io";
const SearchIcon = ({ change }) => {
  return (
    <div>
      <IoIosSearch className={change} style={{ fontSize: "25px" }} />
    </div>
  );
};

export default SearchIcon;
