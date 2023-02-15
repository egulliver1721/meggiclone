import React from "react";
import rainbowTag from "./images/rainbowTag.png";
import wildAnimalTag from "./images/wildAnimalTag.png";
import pinkTag from "./images/pinkTag.png";
import blueTag from "./images/blueTag.png";

export default function Product() {
  return (
    <main className="container">
      <div className="productImage leftColumn">
        <img
          src={rainbowTag}
          alt="picture of meggi nappy bag tag with rainbow pattern"
          className="image active"
          data-image="rainbow"
        />
        <img
          src={wildAnimalTag}
          alt="picture of meggi nappy bag tag with animal pattern"
          className="image"
          data-image="wildAnimal"
        />
        <img
          src={pinkTag}
          alt="picture of meggi nappy bag tag with pink pattern"
          className="image"
          data-image="pink"
        />
        <img
          src={blueTag}
          alt="picture of meggi nappy bag tag with blue pattern"
          className="image"
          data-image="blue"
        />
      </div>
      {/* product description */}
      <div className="rightColumn">
        <div className="productDescription">
          <h1>Nappy Bag Tags</h1>
          <p>
            The ultimate orgnisation accessory for parents or carers of young
            children.
          </p>
        </div>
        {/* product configruation */}

        <div className="productCongifuration">
          <div className="productPattern">
            <span>Pattern</span>
            <div className="colorChoose">
              <div>
                <input
                  type="radio"
                  data-image="rainbow"
                  name="pattern"
                  id="rainbow"
                  value="rainbow"
                  checked
                />
                <label htmlFor="rainbow">
                  <span></span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  data-image="wildAnimal"
                  name="pattern"
                  id="wildAnimal"
                  value="wildAnimal"
                />
                <label htmlFor="wildAnimal">
                  <span></span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  data-image="pink"
                  name="pattern"
                  id="pink"
                  value="pink"
                />
                <label htmlFor="pink">
                  <span></span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  data-image="blue"
                  name="pattern"
                  id="blue"
                  value="blue"
                />
                <label htmlFor="blue">
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* product pricing */}
        <div className="productPrice">
          <span>$14.00 AUD</span>
          <a href="#" className="cartBtn">
            Add to cart
          </a>
        </div>
      </div>
    </main>
  );
}
