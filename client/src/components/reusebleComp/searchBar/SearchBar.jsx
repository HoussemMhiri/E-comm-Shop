import React from "react";
import styles from "./SearchStyle.module.css";
import { TfiClose } from "react-icons/tfi";
import SearchIcon from "../../../icons/SearchIcon";
const SearchBar = ({ handleClose }) => {
  return (
    <div className={styles.inp_cont}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        className={styles.inp}
      />

      <TfiClose className={styles.closeMark} onClick={handleClose} />

      <SearchIcon change={styles.searchMark} />
    </div>
  );
};

export default SearchBar;
