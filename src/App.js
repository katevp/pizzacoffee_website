import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotificationBar from "./components/NotificationBar/NotificationBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./logic/pages/MainPage";
import RegisterPage from "./logic/pages/RegisterPage";
import AccountPage from "./logic/pages/AccountPage";
import CategoryPage from "./logic/pages/CategoryPage";
import OrderPage from "./logic/pages/OrderPage";
import Popup from "./components/Popup/Popup";
import "./App.css";
export const Context = React.createContext();

function App() {
  const [notifyBar, setNotifyBar] = useState();
  const [popup, setPopup] = useState();
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart((prevCart) => {
      let complete = false;

      for (let i = 0; i < prevCart.length; i++) {
        const item = prevCart[i];

        if (item.id === id) {
          prevCart[i].quantity += 1;
          complete = true;
        }
      }

      if (!complete) {
        prevCart.push({
          id,
          quantity: 1,
        });
      }

      return prevCart;
    });
  };

  const delFromCart = (id) => {
    setCart((prevCart) => {
      for (let i = 0; i < prevCart.length; i++) {
        const item = prevCart[i];

        if (item.id === id) {
          if (item.quantity > 1) {
            prevCart[i].quantity -= 1;
          } else {
            prevCart.splice(i, 1);
          }
        }
      }

      return prevCart;
    });
  };

  return (
    <Context.Provider
      value={{
        setNotifyBar,
        setPopup,
        cart,
        addToCart,
        delFromCart,
      }}
    >
      <Popup content={popup} setPopup={setPopup} />
      {notifyBar ? (
        <NotificationBar {...notifyBar} onClose={() => setNotifyBar()} />
      ) : null}
      <div className="App">
        <Header cartLength={cart.length} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/menu/:category" element={<CategoryPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
