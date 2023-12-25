import React from "react";
import styles from "./banner.module.css";
import Col from "react-bootstrap/esm/Col";
const Banners = ({
  el,
  AllCont,
  thirdCont,
  lastOne,
  Row,
  imgs,
  desc,
  h3,
  p,
}) => {
  return (
    <div
      className={`container-fluid ${
        el.id < 3
          ? AllCont
          : el.id === 3
          ? thirdCont
          : el.id === 5
          ? lastOne
          : AllCont
      }`}
    >
      <div className={`row ${Row}`}>
        {el.id % 2 !== 0 ? (
          <>
            <div className={`col-12 col-md-6`}>
              <img src={`${el.imge}`} alt="" className={`img-fluid ${imgs}`} />
            </div>
            <div className={`col-12 col-md-6 ${desc}`}>
              <h2 className={h3}>{el.h3}</h2>
              <p className={p}>{el.p}</p>
            </div>
          </>
        ) : (
          <>
            <div className={`col-12 col-md-6`}>
              <h2 className={h3}>{el.h3}</h2>
              <p className={p}>{el.p}</p>
            </div>
            <div className={`col-12 col-md-6 ${desc}`}>
              <img src={`${el.imge}`} alt="" className={`img-fluid ${imgs}`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Banners;
