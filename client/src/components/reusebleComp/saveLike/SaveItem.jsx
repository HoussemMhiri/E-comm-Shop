import React from "react";
import { FaHeart } from "react-icons/fa";
const SaveItem = () => {
  const likeChange = (e) => {
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");
  };
  return (
    <button
      onClick={(e) => likeChange(e)}
      style={{ background: "none", border: "none" }}
    >
      <FaHeart style={{ color: "grey" }} />
    </button>
  );
};

export default SaveItem;
