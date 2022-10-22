import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import CartProvider from "./store/CartProvider";
import OrderConfirmed from "./components/Cart/OrderConfirmed";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderConfiremd, setOrderConfiremd] = useState(false);
  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };
  const confirmOrderHandler = () => {
    setOrderConfiremd(true);
  };
  const closeConfirmation = () => {
    setOrderConfiremd(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCart} confirmOrder={confirmOrderHandler} />
      )}
      {orderConfiremd && <OrderConfirmed onClose={closeConfirmation} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
