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
              <span
                className={props.pattern === "rainbowTag" ? "activeInput" : ""}
              ></span>
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
              <span
                className={
                  props.pattern === "wildAnimalTag" ? "activeInput" : ""
                }
              ></span>
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
              <span
                className={props.pattern === "pinkTag" ? "activeInput" : ""}
              ></span>
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
              <span
                className={props.pattern === "blueTag" ? "activeInput" : ""}
              ></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
