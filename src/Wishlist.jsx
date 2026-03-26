import React, { useContext } from "react";
import { Maincontext } from "./Maincontext";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeWishList, closeWishlist, addCart } = useContext(Maincontext);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Wishlist</h2>
        <button className="close-btn" onClick={closeWishlist}>
          ✕
        </button>
      </div>

      {wishlist.length === 0 && (
        <p style={{ textAlign: "center" }}>Wishlist is empty</p>
      )}

      {wishlist.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-info">
            <p>{item.title}</p>
            <p className="price">Rs {item.price}/-</p>
            <button className="cart-btn"
              onClick={() => {
                addCart(item);       // Add to cart
                removeWishList(item.id); // Remove from wishlist
              }}
            >
              Move to Cart
            </button>
          </div>
          <button className="remove" onClick={() => removeWishList(item.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};


export default Wishlist;
