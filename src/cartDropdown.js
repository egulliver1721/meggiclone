import React from "react";

export default function CartDropdown(props) {
  const itemsInCart = props.filteredTagData.map((item, index) => {
    return (
      //   <div key={index} className="cartItemContainer">
      //     {" "}
      //     <div className="cartItemThumbnailContainer">
      //       <img className="cartItemThumbnail" src={item.thumbnail} alt="" />
      //     </div>
      //     <div className="cartItemDetails">
      //       <div className="cartItemName">{item.itemName}</div>
      //       <div className="cartItemQuantity">Qty: 1</div>
      //     </div>
      //     <div className="cartItemPrice">${item.price}</div>
      //   </div>
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
          <div className="cartItemQuantity">Qty: 1</div>
        </div>
        <div className="cartItemPrice">${item.price}</div>
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
