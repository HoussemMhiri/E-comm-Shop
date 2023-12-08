import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import BagIcon from "../../../../icons/BagIcon";
import AdminIcon from "../../../../icons/AdminIcon";
import LikeItem from "../../../../icons/LikeItem";
import SearchOffCanvas from "../../../reusebleComp/offcanvas/SearchOffCanvas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import SideMenu from "../../../reusebleComp/burgerBtn/SideMenu";

const HeaderNav = () => {
  const cat = [
    "New",
    "Sale",
    "Going Fast",
    "Rain",
    "Snow",
    "All Weather",
    "Shop All",
    "Values",
  ];
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= 150) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {};
  }, []);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <Container fluid className={styles.UpperNavCont}>
        <Row>
          <Col>
            <p className={styles.upperNavParg}>
              Free Shipping Worldwide. Easy returns. Pay in 4 installments.
            </p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className={`${fix ? styles.header_contMod : styles.header_cont}`}
      >
        <Row className={styles.rowCont}>
          <Col sm={8} className={styles.headerColOne}>
            <img
              className={`${fix ? styles.logoMod : styles.logo}`}
              src="img/THESUS-LOGO1.png"
              alt=""
            />

            {screenWidth > 1051 ? (
              <Stack
                direction="horizontal"
                gap={1}
                className={styles.categories}
              >
                {cat.map((el) => (
                  <div key={Math.random()} className={`${styles.spans} p-2`}>
                    {el}
                  </div>
                ))}
              </Stack>
            ) : (
              <div className={styles.sideM}>
                <SideMenu
                  cat={cat}
                  categories={styles.categories}
                  spans={styles.spans}
                />
              </div>
            )}
          </Col>

          <Col sm={4} className={styles.headerColTwo}>
            <Stack direction="horizontal" gap={1} className={styles.iconsNav}>
              <div className="p-2">
                <select className={styles.selection} name="" id="">
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>

              <div className="p-2">
                <SearchOffCanvas />
              </div>
              <div className="p-2">
                <AdminIcon />
              </div>
              <div className="p-2">
                <BagIcon />
              </div>
              <div className="p-2">
                <LikeItem />
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderNav;
