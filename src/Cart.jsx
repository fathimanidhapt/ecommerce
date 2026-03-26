import React, { useContext } from "react";
import { Maincontext } from "./Maincontext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeCart, increment, decrement, closeCart } =
    useContext(Maincontext);

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subTotal > 0 ? 10 : 0;
  const tax = 0;
  const total = subTotal - discount + tax;

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Cart</h2>
        <button className="close-btn" onClick={closeCart}>
          ✕
        </button>
      </div>

      {cart.length === 0 && <p style={{ textAlign: "center" }}>Cart is empty</p>}

      {cart.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-info">
            <p>{item.title}</p>
            <p className="price">Rs {item.price}/-</p>
            <div className="qty">
              <button onClick={() => decrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.id)}>+</button>
            </div>
          </div>
          <button className="remove" onClick={() => removeCart(item.id)}>
            ✕
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div className="apply-box">
            <input type="text" placeholder="Enter Your Promocode" />
            <button>Apply</button>
          </div>

          <div className="price-box">
            <div className="row">
              <span>Sub Total</span>
              <span>Rs {subTotal}</span>
            </div>
            <div className="row">
              <span>Discount</span>
              <span>Rs {discount}</span>
            </div>
            <div className="row">
              <span>Tax</span>
              <span>Rs {tax}</span>
            </div>
            <hr />
            <div className="row total">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;