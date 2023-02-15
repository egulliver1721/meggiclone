import React from "react";
import rainbowTag from "./images/rainbowTag.png";
import wildAnimalTag from "./images/wildAnimalTag.png";
import pinkTag from "./images/pinkTag.png";
import blueTag from "./images/blueTag.png";

export default function ProductImage() {
  return (
    <div className="productImage leftColumn">
      <img
        src={rainbowTag}
        alt="meggi nappy bag tag with rainbow pattern"
        className="image active"
        data-image="rainbow"
      />
      <img
        src={wildAnimalTag}
        alt="meggi nappy bag tag with animal pattern"
        className="image"
        data-image="wildAnimal"
      />
      <img
        src={pinkTag}
        alt="meggi nappy bag tag with pink pattern"
        className="image"
        data-image="pink"
      />
      <img
        src={blueTag}
        alt="meggi nappy bag tag with blue pattern"
        className="image"
        data-image="blue"
      />
    </div>
  );
}
