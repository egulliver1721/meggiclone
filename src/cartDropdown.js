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
              <button
                className="cartQtyBtn"
                onClick={() => props.decrement(item.pattern)}
              >
                -
              </button>
              <span className="cartQty"> {item.quantity} </span>
              <button
                className="cartQtyBtn"
                onClick={() => props.increment(item.pattern)}
              >
                +
              </button>
            </span>
          </div>
        </div>
        <div className="cartItemPrice">${item.price}</div>
        <div className="cartItemRemoveContainer">
          <button
            className="cartItemRemove"
            onClick={() => props.remove(item.pattern)}
          >
            x
          </button>
        </div>
      </div>
    );
  });

  return (
    <div
      className="cartDropdown"
      style={props.isCartOpen ? { display: "block" } : { display: "none" }}
    >
      {itemsInCart.length > 0 ? (
        <div>
          {itemsInCart}
          <div
            className="cartTotalContainer"
            style={totalRounded > 0 ? { display: "grid" } : { display: "none" }}
          >
            <div className="cartTotalWord">Sub-total:</div>
            <div className="cartTotal">${totalRounded}</div>
          </div>
        </div>
      ) : (
        <div className="cartEmpty">Your cart is empty</div>
      )}
    </div>
  );
}
