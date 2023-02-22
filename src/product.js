import React, { useEffect } from "react";
import ProductImage from "./productImage.js";
import ProductConfiguration from "./productConfig.js";

export default function Product() {
  const [tagPattern, setTagPattern] = React.useState("rainbowTag");
  const [cartItems, setCartItems] = React.useState([]);

  function onPatternClick(e) {
    e.preventDefault();
    setTagPattern((prevPattern) => e.target.getAttribute("data-image"));
  }

  useEffect(() => {
    console.log(tagPattern);
  }, [tagPattern]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartItems([...cartItems, tagPattern]);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
