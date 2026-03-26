import { createContext, useEffect, useState } from "react";

export const Maincontext = createContext();

const MainProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);


  // Fetch products once
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    getProducts();
  }, []);

  // CART FUNCTIONS
  const addCart = (item) => {
    const exist = cart.find((p) => p.id === item.id);
    if (exist) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setShowCart(true);
    setShowWishlist(false);
  };

  const removeCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const increment = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrement = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );

  const openCart = () => {
    setShowCart(true);
    setShowWishlist(false);
  };

  const closeCart = () => setShowCart(false);

  // WISHLIST FUNCTIONS
  const addWishList = (item) => {
    if (wishlist.find((p) => p.id === item.id)) {
      setWishlist(wishlist.filter((p) => p.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
    setShowWishlist(true);
    setShowCart(false);
  };

  const removeWishList = (id) =>
    setWishlist(wishlist.filter((item) => item.id !== id));
  
 const openWishlist = () => {
    setShowWishlist(true);
    setShowCart(false);
  };
  const closeWishlist = () => setShowWishlist(false);

  return (
    <Maincontext.Provider
      value={{
        products,
        cart,
        addCart,
        removeCart,
        increment,
        decrement,
        wishlist,
        addWishList,
        removeWishList,
        showCart,
        openCart,
        openWishlist,
        closeCart,
        showWishlist,
        closeWishlist,
      }}
    >
      {children}
    </Maincontext.Provider>
  );
};

export default MainProvider;
