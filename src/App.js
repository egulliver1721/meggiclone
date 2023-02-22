import React, { useEffect } from "react";
import "./App.css";
import heroImage from "./meggicover.jpg";
import Header from "./header.js";
import Navigation from "./navigation.js";
import Product from "./product.js";

function App() {
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
    <div className="App">
      <section className="center banner">
        <p>Free shipping within Australia</p>
      </section>
      <section className="section-width-standard">
        <Navigation cartItems={cartItems} />
      </section>
      <div className="heroContainer">
        <Header heroImage={heroImage} />
      </div>
      <Product
        onPatternClick={onPatternClick}
        handleSubmit={handleSubmit}
        pattern={tagPattern}
      />
    </div>
  );
}

export default App;
