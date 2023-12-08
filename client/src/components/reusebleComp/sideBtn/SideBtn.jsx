import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdSort } from "react-icons/md";
import styles from "./side.module.css";
import Filter from "../../productsPage/pages/filterCont/Filter";
const SideBtn = () => {
  const [show, setShow] = useState(false);
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="none" onClick={handleShow} className="me-2">
        <MdSort /> <span className={styles.Span}>Filter and Sort</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter and Sort</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Filter
            divCont={styles.divCont}
            sortP={styles.sortP}
            select={styles.select}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideBtn;
