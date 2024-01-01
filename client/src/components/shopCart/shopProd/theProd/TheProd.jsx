import React from "react";
import styles from "./theProd.module.css";
const TheProd = ({ el }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row d-flex">
        <div className="col-6 col-sm-3  mx-0 ">
          <img src={el} alt="" className="img-fluid" />
        </div>
        <div className={`col-6 col-sm-5  ${styles.descCont}`}>
          <h6>The Weekend Boot Z in Black</h6>
          <p className="my-0 text-secondary ">$211</p>
          <p className="text-secondary">Size: 36</p>
        </div>
      </div>
    </div>
  );
};

export default TheProd;
