import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchIcon from "../../../icons/SearchIcon";
import SearchBar from "../searchBar/SearchBar";

const SearchOffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const customOffcanvasStyles = {
    top: "38px",
    left: "0",
    width: "100%",
    bottom: "unset",
    right: "unset",
    height: "7.125em",
  };

  return (
    <div>
      <span variant="none" onClick={handleShow}>
        <SearchIcon />
      </span>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={customOffcanvasStyles}
      >
        <Offcanvas.Body>
          <SearchBar handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SearchOffCanvas;
