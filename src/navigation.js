import React from "react";

export default function Navigation(props) {
  const [isCartOpen, setCartOpen] = React.useState(false);

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
        <span className="itemsInCart">1</span>
      </span>
      <div
        className="cartDropdown"
        style={isCartOpen ? { display: "block" } : { display: "none" }}
      ></div>
    </nav>
  );
}
