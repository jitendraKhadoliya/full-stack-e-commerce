import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// here first i will create context

export const CreatedContext = createContext(null);

// create provider here

const AppContext = (props) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  // * here we will create state for cart functionality
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {}, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    // * here first i will add all the cartItems in array
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  const handleRemoveFromCart = () => {};
  const handleCartProductQuantity = () => {};

  return (
    <>
      <CreatedContext.Provider
        value={{
          categories,
          setCategories,
          products,
          setProducts,
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
          cartSubTotal,
          setCartSubTotal,
          handleAddToCart,
          handleRemoveFromCart,
          handleCartProductQuantity,
        }}
      >
        {props.children}
      </CreatedContext.Provider>
    </>
  );
};

export default AppContext;
