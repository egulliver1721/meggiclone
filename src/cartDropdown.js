import React from "react";

export default function CartDropdown(props) {
  const itemsInCart = props.filteredTagData.map((item, index) => {
    return (
      <div className="cartItemContainer" key={index}>
        <div className="cartItemThumbnailContainer">
          <img
            className="cartItemThumbnail"
            src={item.thumbnail}
            alt="item thumbnail"
          />
        </div>
        <div className="cartItemDetails">
          <div className="cartItemName">{item.itemName}</div>
          <div className="cartItemQtyContainer">
            <span className="cartItemQuantity">
              <button className="cartQtyBtn">-</button>
              <span className="cartQty"> 1 </span>
              <button className="cartQtyBtn">+</button>
            </span>
          </div>
        </div>
        <div className="cartItemPrice">${item.price}</div>
        <div className="cartItemRemoveContainer">
          <button className="cartItemRemove">x</button>
        </div>
      </div>
    );
  });

  return (
    <div
      className="cartDropdown"
      style={props.isCartOpen ? { display: "block" } : { display: "none" }}
    >
      <div>{itemsInCart}</div>
    </div>
  );
}