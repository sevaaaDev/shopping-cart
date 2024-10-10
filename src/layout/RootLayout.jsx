import { Outlet } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import s from "./layout.module.css";
import { useState } from "react";

function RootLayout() {
  const [cartItems, setCartItems] = useState([]);
  let numOfItems = cartItems.length;
  return (
    <div className={s.container}>
      <NavBar cart={numOfItems} />
      <Outlet context={{ setCartItems, cartItems }} />
    </div>
  );
}

export default RootLayout;
