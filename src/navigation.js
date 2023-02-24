import React from "react";
import rainbowThumbnail from "./images/rainbowThumbnail.png";
import blueThumbnail from "./images/blueThumbnail.png";
import pinkThumbnail from "./images/pinkThumbnail.png";
import wildAnimalThumbnail from "./images/wildAnimalThumbnail.png";

export default function Navigation(props) {
  const tagData = [
    {
      pattern: "rainbowTag",
      thumbnail: rainbowThumbnail,
      price: "13.20",
    },
    {
      pattern: "blueTag",
      thumbnail: blueThumbnail,
      price: "13.20",
    },
    {
      pattern: "pinkTag",
      thumbnail: pinkThumbnail,
      price: "13.20",
    },
    {
      pattern: "wildAnimalTag",
      thumbnail: wildAnimalThumbnail,
      price: "13.20",
    },
  ];

  const { cartItems } = props;
  const numberOfCartItems = cartItems.length;
  const [isCartOpen, setCartOpen] = React.useState(false);

  const filteredTagData = tagData.filter((tag) =>
    cartItems.includes(tag.pattern)
  );
  console.log(filteredTagData);

  const itemsInCart = filteredTagData.map((item, index) => {
    return (
      <div key={index}>
        {" "}
        <div>{item.pattern}</div>
        <div>
          {item.price}
          <img className="cartItemThumbnail" src={item.thumbnail} alt="" />
        </div>
      </div>
    );
  });

  function openCartDropdown() {
    setCartOpen(!isCartOpen);
  }

  return (
    <nav className="navigation">
      <h1 className="logoText marginNavBar">MEGGI</h1>
      <h4 className="marginNavBar">
        Shop Nappy Bag Tags
        <span className="material-symbols-rounded expand">expand_more</span>
      </h4>
      <span
        className="material-symbols-rounded cartIcon"
        onClick={openCartDropdown}
      >
        shopping_cart
        {numberOfCartItems > 0 && (
          <span className="itemsInCart">{numberOfCartItems}</span>
        )}
      </span>
      <div
        className="cartDropdown"
        style={isCartOpen ? { display: "block" } : { display: "none" }}
      >
        <div>{itemsInCart}</div>
      </div>
    </nav>
  );
}
