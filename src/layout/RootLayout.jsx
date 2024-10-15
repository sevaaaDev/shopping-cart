import { Outlet } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import s from "./layout.module.css";
import { useState } from "react";

function RootLayout() {
  const [cartItems, setCartItems] = useState([]);
  let numOfItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  return (
    <div>
      <NavBar cart={numOfItems} />
      <Outlet context={{ setCartItems, cartItems }} />
    </div>
  );
}

export default RootLayout;
