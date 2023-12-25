import React from "react";
import styles from "./descStyle.module.css";
import Options from "./options/Options";
const DescComp = () => {
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  return (
    <div className={` container-fluid ${styles.allDescCont}`}>
      <div className={styles.descParag}>
        <p
          style={{ fontSize: 12, color: "gray", fontWeight: "600", margin: 0 }}
        >
          THESUS
        </p>
        <h1 style={{ color: "#123026" }}>The Weekend Boot in Sage</h1>
        <p
          style={{
            fontSize: 18,
            color: "#123026",
            fontWeight: "500",
            margin: "0.5em 0",
            letterSpacing: "1.3px",
          }}
        >
          $224 USD
        </p>
        <p
          style={{
            fontSize: 12,
            color: "grey",
            fontWeight: "500",
            marginBottomn: "1em",
            letterSpacing: "0.7px",
          }}
        >
          <span style={{ textDecoration: "underline" }}>Shipping</span>{" "}
          calculated at checkout.
        </p>
      </div>
      <div className={styles.descOptions}>
        <Options />
      </div>
      <div className={styles.descReste}>
        <div className="d-flex flex-column my-4">
          <label className="text-secondary mb-2 form-label " htmlFor="">
            Size
          </label>
          <select name="" id="" className={`w-50 ${styles.select} form-select`}>
            {sizes.map((el) => (
              <option key={Math.random()} value="">
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.desc}>
          <button className={styles.Btn}>Add to cart</button>
          <p>Comfy all day. Cozy all year. Wear them with anything.</p>
          <p>
            The Weekend Boots are vegan and sustainably made with over 95%
            natural and recycled materials. Their minimalist yet versatile
            design is made to take you wherever your day ends up - on a trail,
            in the park, at brunch or errands in the city, they've got you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescComp;
