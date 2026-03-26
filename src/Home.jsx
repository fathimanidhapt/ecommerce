import React, { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2, BsSliders } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBars, FaFacebookSquare, FaInstagramSquare, FaStar } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { Maincontext } from "./Maincontext";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const Home = () => {
  const {
    products,
    addCart,
    addWishList,
    wishlist,
    showCart,
    showWishlist,
    openCart,
    openWishlist,
  } = useContext(Maincontext);

  const [showMenuIcons, setShowMenuIcons] = useState(false);

  return (
    <div className="bg">
      <div className="products-area">

        {/* HEADER */}
        <div className="header">
          <div className="logo">
            <img src="src/assets/kiddy.png" alt="logo" />
          </div>

          <div className="righticons">

            {/* TOGGLE ICONS */}
            <div className={`menu-icons ${showMenuIcons ? "show" : ""}`}>
              <span className="search-icon">
                <IoSearchOutline />
              </span>

              <span className="cart-icon" onClick={openCart}>
                <BsCart2 />
              </span>

              <span className="heart-icon" onClick={openWishlist}>
                <IoMdHeartEmpty />
              </span>

              <span className="noti-icon">
                <RiNotification3Line />
              </span>

              <span className="profile-icon">
                <GoPerson />
              </span>
            </div>

            {/* BAR ICON */}
            <span
              className="bar-icon"
              onClick={() => setShowMenuIcons(!showMenuIcons)}
            >
              <FaBars />
            </span>

          </div>
        </div>

        {/* NAV */}
        <div className="nav">
          <select defaultValue="">
            <option value="" disabled>BABIES</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option>Pant</option>
            <option>Trouser</option>
          </select>

          <select defaultValue="">
            <option value="" disabled>BOYS</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option>Pant</option>
            <option>Trouser</option>
          </select>

          <select defaultValue="">
            <option value="" disabled>GIRLS</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option>Pant</option>
            <option>Trouser</option>
          </select>
        </div>

        {/* BANNER */}
        <div className="banner">
          <img src="src/assets/banner.png" alt="banner" />
        </div>

        {/* CATEGORIES */}
        <div className="categories">
          <h1>Our Top Categories</h1>
          <p>
            Sorted by:
            <button>
              All Category <h2><BsSliders /></h2>
            </button>
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="list bg">
          <div className="list row g-4">
            {products.map((item) => {
              const isWishlisted = wishlist.some(
                (wish) => wish.id === item.id
              );

              return (
                <div
                  className="item col-12 col-sm-6 col-md-4 col-lg-2"
                  key={item.id}
                >
                  <div className="icon">
                    <IoMdHeartEmpty
                      onClick={() => addWishList(item)}
                      style={{
                        color: isWishlisted ? "rgb(214, 17, 17)" : "black",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <img
                    className="productimg"
                    src={item.image}
                    alt={item.title}
                  />

                  <p>{item.title}</p>

                  <div className="price">
                    <h3>Rs {item.price}/-</h3>
                    <h2>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </h2>
                  </div>

                  <button onClick={() => addCart(item)}>
                    <h1><MdOutlineShoppingBag /></h1>
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2>Kiddy Store</h2>
            <p>We bring the best clothing for you with love and care.</p>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Email: support@kiddy.com</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: 123, Kids Street, India</p>
          </div>

          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <span><FaFacebookSquare /></span>
              <span><FaInstagramSquare /></span>
              <span><FaSquareXTwitter /></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2026 Kiddy Store. All rights reserved.
        </div>
      </footer>

      {showCart && <Cart />}
      {showWishlist && <Wishlist />}
    </div>
  );
};

export default Home;
