import React from "react";

export default function Navigation(props) {
  const { cartItems } = props;
  const numberOfCartItems = cartItems.length;
  const [isCartOpen, setCartOpen] = React.useState(false);

  // map over the cartItems array
  // display each item in the array
  // with the html
  // inject the individual item in cartItems
  // display the data-image attribute text
  // if no items in cart display "your cart is empty"

  const itemsInCart = cartItems.map((item, index) => {
    return <li key={index}> {item}</li>;
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
        <ul>{itemsInCart}</ul>
      </div>
    </nav>
  );
}
