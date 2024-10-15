import { Outlet } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import s from "./layout.module.css";
import { useState } from "react";
import styled from "styled-components";

function RootLayout() {
  const [cartItems, setCartItems] = useState([]);
  let numOfItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  return (
    <StyledRoot>
      <NavBar cart={numOfItems} />
      <Outlet context={{ setCartItems, cartItems }} />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: relative;
`;

export default RootLayout;
