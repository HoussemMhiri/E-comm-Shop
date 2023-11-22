import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./sectStyle.module.css";
import { PiRulerThin } from "react-icons/pi";
import { accordData } from "./accordData";
const SectSix = () => {
  return (
    <div className={styles.allCont}>
      <div className={styles.descCont}>
        <h3 className={styles.descH3}>Try Them Out!</h3>
        <p className={styles.descP}>
          Easy returns as many times as you need to find the right size. Just
          contact our team for support!
        </p>
      </div>
      <div className={styles.secCont}>
        <Accordion>
          {accordData.map((el) => (
            <Accordion.Item eventKey={el.event} className={styles.Accord}>
              <Accordion.Header className={styles.AccordHead}>
                <span className={styles.AccordIcon}>{el.icon}</span>{" "}
                <span className={styles.AccordTitle}>{el.title}</span>
              </Accordion.Header>
              <Accordion.Body className={styles.AccordBody}>
                {el.p}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SectSix;
