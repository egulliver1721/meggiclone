import React, { useEffect } from "react";
// import rainbowThumbnail from "./images/rainbowThumbnail.png";
// import blueThumbnail from "./images/blueThumbnail.png";
// import pinkThumbnail from "./images/pinkThumbnail.png";
// import wildAnimalThumbnail from "./images/wildAnimalThumbnail.png";
import CartDropdown from "./cartDropdown.js";

// const tagData = [
//   {
//     pattern: "rainbowTag",
//     itemName: "Rainbow Tag",
//     thumbnail: rainbowThumbnail,
//     price: "13.20",
//     quantity: 1,
//   },
//   {
//     pattern: "blueTag",
//     itemName: "Blue Floral Tag",
//     thumbnail: blueThumbnail,
//     price: "13.20",
//     quantity: 1,
//   },
//   {
//     pattern: "pinkTag",
//     itemName: "Pink Floral Tag",
//     thumbnail: pinkThumbnail,
//     price: "13.20",
//     quantity: 1,
//   },
//   {
//     pattern: "wildAnimalTag",
//     itemName: "Wild Animal Tag",
//     thumbnail: wildAnimalThumbnail,
//     price: "13.20",
//     quantity: 1,
//   },
// ];

export default function Navigation(props) {
  const {
    cartItems,
    handleDecrement,
    handleIncrement,
    handleRemove,
    filteredTagData,
  } = props;
  const numberOfCartItems = cartItems.length;
  const [isCartOpen, setCartOpen] = React.useState(false);
  // const [filteredTagData, setFilteredTagData] = React.useState([]);

  // useEffect(() => {
  //   const updatedData = tagData.filter((tag) =>
  //     cartItems.includes(tag.pattern)
  //   );
  //   setFilteredTagData(updatedData);
  // }, [cartItems, props.setCartItems]);

  function openCartDropdown() {
    setCartOpen((prevState) => !isCartOpen);
  }

  // function handleIncrement(pattern) {
  //   const updatedFilteredData = filteredTagData.map((tag) => {
  //     if (tag.pattern === pattern) {
  //       return { ...tag, quantity: tag.quantity + 1 };
  //     } else {
  //       return tag;
  //     }
  //   });
  //   setFilteredTagData(updatedFilteredData);
  // }

  // function handleDecrement(pattern) {
  //   const updatedFilteredData = filteredTagData.map((tag) => {
  //     if (tag.pattern === pattern) {
  //       const newQuantity = Math.max(1, tag.quantity - 1);
  //       return { ...tag, quantity: newQuantity };
  //     } else {
  //       return tag;
  //     }
  //   });
  //   setFilteredTagData(updatedFilteredData);
  // }

  // function handleRemove(pattern) {
  //   const removeFilteredData = filteredTagData.filter(
  //     (tag) => tag.pattern !== pattern
  //   );
  //   setFilteredTagData(removeFilteredData);
  //   props.setCartItems(removeFilteredData);
  // }

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
      <CartDropdown
        isCartOpen={isCartOpen}
        filteredTagData={filteredTagData}
        decrement={handleDecrement}
        increment={handleIncrement}
        remove={handleRemove}
      />
    </nav>
  );
}
