import React from "react";
import styles from "./optionsStyle.module.css";
const Options = () => {
  const imageContext = require.context("./img", false, /\.(png|jpe?g|svg)$/);
  const images = imageContext.keys().map(imageContext);

  const getImageTitle = (imageUrl) => {
    // Extract the filename from the image URL
    const filenameWithExtension = imageUrl.split("/").pop();
    // Remove the file extension and anything after the dot
    const filenameWithoutExtension = filenameWithExtension.replace(/\..+$/, "");
    // Replace underscores with spaces and capitalize words
    return filenameWithoutExtension
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div>
      <p className="text-body-secondary fs-6">Options</p>
      <div className={styles.optCont}>
        {images.map((image, index) => (
          <div key={index} className={styles.allImgCont}>
            <img
              className={`shadow-sm bg-body-tertiary rounded ${styles.oneImg}`}
              key={index}
              src={image}
              alt="shoe"
            />
            <div className={styles.customTooltip}>{getImageTitle(image)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
