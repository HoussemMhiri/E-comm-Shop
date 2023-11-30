import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import Stack from "react-bootstrap/Stack";
const SideMenu = ({ cat, categories, spans }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="none" onClick={handleShow}>
        <RxHamburgerMenu style={{ fontSize: "25" }} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={1} className={categories}>
            {cat.map((el) => (
              <div className={`${spans} p-2`}>{el}</div>
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideMenu;
