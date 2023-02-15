import React from "react";

export default function ProductConfiguration() {
  return (
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
  );
}
