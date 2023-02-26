import React, { useEffect } from "react";
import "./App.css";
import heroImage from "./meggicover.jpg";
import Header from "./header.js";
import Navigation from "./navigation.js";
import Product from "./product.js";
import rainbowThumbnail from "./images/rainbowThumbnail.png";
import blueThumbnail from "./images/blueThumbnail.png";
import pinkThumbnail from "./images/pinkThumbnail.png";
import wildAnimalThumbnail from "./images/wildAnimalThumbnail.png";

const tagData = [
  {
    pattern: "rainbowTag",
    itemName: "Rainbow Tag",
    thumbnail: rainbowThumbnail,
    price: "13.20",
    quantity: 1,
  },
  {
    pattern: "blueTag",
    itemName: "Blue Floral Tag",
    thumbnail: blueThumbnail,
    price: "13.20",
    quantity: 1,
  },
  {
    pattern: "pinkTag",
    itemName: "Pink Floral Tag",
    thumbnail: pinkThumbnail,
    price: "13.20",
    quantity: 1,
  },
  {
    pattern: "wildAnimalTag",
    itemName: "Wild Animal Tag",
    thumbnail: wildAnimalThumbnail,
    price: "13.20",
    quantity: 1,
  },
];

function App() {
  const [tagPattern, setTagPattern] = React.useState("rainbowTag");
  const [cartItems, setCartItems] = React.useState([]);
  const [filteredTagData, setFilteredTagData] = React.useState([]);

  function onPatternClick(e) {
    e.preventDefault();
    setTagPattern((prevPattern) => e.target.getAttribute("data-image"));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const exists = cartItems.includes(tagPattern);
    if (!exists) {
      setCartItems([...cartItems, tagPattern]);
    }
  };

  useEffect(() => {
    const updatedData = tagData.filter((tag) =>
      cartItems.includes(tag.pattern)
    );
    setFilteredTagData(updatedData);
  }, [cartItems, setCartItems]);

  function handleIncrement(pattern) {
    const updatedFilteredData = filteredTagData.map((tag) => {
      if (tag.pattern === pattern) {
        return { ...tag, quantity: tag.quantity + 1 };
      } else {
        return tag;
      }
    });
    setFilteredTagData(updatedFilteredData);
  }

  function handleDecrement(pattern) {
    const updatedFilteredData = filteredTagData.map((tag) => {
      if (tag.pattern === pattern) {
        const newQuantity = Math.max(1, tag.quantity - 1);
        return { ...tag, quantity: newQuantity };
      } else {
        return tag;
      }
    });
    setFilteredTagData(updatedFilteredData);
  }

  function handleRemove(pattern) {
    const removeFilteredData = filteredTagData.filter(
      (tag) => tag.pattern !== pattern
    );
    setFilteredTagData(removeFilteredData);
    setCartItems(removeFilteredData);
  }

  return (
    <div className="App">
      <section className="center banner">
        <p>Free shipping within Australia</p>
      </section>
      <section className="section-width-standard">
        <Navigation
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleRemove={handleRemove}
          filteredTagData={filteredTagData}
        />
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
