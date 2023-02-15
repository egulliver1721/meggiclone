import React from "react";

export default function ProductConfiguration(props) {
  return (
    <div className="productCongifuration">
      <div className="productPattern">
        <span>Pattern</span>
        <div className="colorChoose">
          <div>
            <input
              type="radio"
              data-image="rainbowTag"
              name={props.pattern}
              id="rainbow"
              value="rainbow"
              onChange={props.onPatternClick}
            />
            <label htmlFor="rainbow">
              <span></span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              data-image="wildAnimalTag"
              name={props.pattern}
              id="wildAnimal"
              value="wildAnimal"
              onChange={props.onPatternClick}
            />
            <label htmlFor="wildAnimal">
              <span></span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              data-image="pinkTag"
              name={props.pattern}
              id="pink"
              value="pink"
              onChange={props.onPatternClick}
            />
            <label htmlFor="pink">
              <span></span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              data-image="blueTag"
              name={props.pattern}
              id="blue"
              value="blue"
              onChange={props.onPatternClick}
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
