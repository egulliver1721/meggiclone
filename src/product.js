import React from "react";
import ProductImage from "./productImage.js";
import ProductConfiguration from "./productConfig.js";

export default function Product() {
  const [tagPattern, setTagPattern] = React.useState("");

  function onPatternClick(e) {
    e.preventDefault();
    let pattern = e.target.getAttribute("data-image");
    console.log(pattern);
    setTagPattern(pattern);
  }

  return (
    <main className="container">
      <ProductImage pattern={tagPattern} />
      {/* product description */}
      <div className="rightColumn">
        <div className="productDescription">
          <h1>Nappy Bag Tags</h1>
          <p>
            The ultimate orgnisation accessory for parents or carers of young
            children.
          </p>
        </div>
        <ProductConfiguration
          pattern={tagPattern}
          onPatternClick={onPatternClick}
        />
        {/* product pricing */}
        <div className="productPrice">
          <span>$14.00 AUD</span>
          <a href="www.google.com" className="cartBtn">
            Add to cart
          </a>
        </div>
      </div>
    </main>
  );
}
