import { Outlet } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import { useState } from "react";
import styled from "styled-components";
import { SlidingCart } from "../component/SlidingCart";

function RootLayout() {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  let numOfItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  return (
    <StyledRoot>
      <NavBar cart={numOfItems} showCart={() => setShow(!show)} />
      <Outlet context={{ setCartItems, cartItems }} />
      <SlidingCart
        show={show}
        setShow={setShow}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: relative;
`;

export default RootLayout;
