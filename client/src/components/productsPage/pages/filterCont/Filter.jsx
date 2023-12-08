import React from "react";

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
const Filter = ({ divCont, sortP, select }) => {
  return (
    <>
      <div className={`col ${divCont}`}>
        <p className={sortP}>Filter:</p>

        <select name="" id="" className={select}>
          <option value="">Size</option>
          {sizes.map((el) => (
            <option key={Math.random()} value="">
              {el}
            </option>
          ))}
        </select>
      </div>

      <div className={`col col-md-3  ${divCont}`}>
        <p className={sortP}>Sort by:</p>

        <select name="" id="" className={select}>
          <option value="">Featured</option>
          <option value="">Price: Low To High</option>
          <option value="">Price: High To Low</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
