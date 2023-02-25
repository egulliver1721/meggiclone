import React from "react";
import rainbowThumbnail from "./images/rainbowThumbnail.png";
import blueThumbnail from "./images/blueThumbnail.png";
import pinkThumbnail from "./images/pinkThumbnail.png";
import wildAnimalThumbnail from "./images/wildAnimalThumbnail.png";
import CartDropdown from "./cartDropdown.js";

export default function Navigation(props) {
  const tagData = [
    {
      pattern: "rainbowTag",
      itemName: "Rainbow Tag",
      thumbnail: rainbowThumbnail,
      price: "13.20",
    },
    {
      pattern: "blueTag",
      itemName: "Blue Floral Tag",
      thumbnail: blueThumbnail,
      price: "13.20",
    },
    {
      pattern: "pinkTag",
      itemName: "Pink Floral Tag",
      thumbnail: pinkThumbnail,
      price: "13.20",
    },
    {
      pattern: "wildAnimalTag",
      itemName: "Wild Animal Tag",
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
      <CartDropdown isCartOpen={isCartOpen} filteredTagData={filteredTagData} />
    </nav>
  );
}
