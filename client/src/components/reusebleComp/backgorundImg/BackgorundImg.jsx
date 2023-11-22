import React from "react";
import BtnShop from "../shopBtn/BtnShop";

const BackgorundImg = ({
  h3,
  p,
  pBtn,
  styleCont,
  styleContSec,
  styleH3,
  styleP,
  styleBtn,
}) => {
  return (
    <div className={styleCont}>
      <div className={styleContSec}>
        <h3 className={styleH3}>{h3}</h3>
        <p className={styleP}>{p}</p>
        <BtnShop styleBtn={styleBtn} pBtn={pBtn} />
      </div>
    </div>
  );
};

export default BackgorundImg;
