import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CartPage } from "../pages/CartPage";
export function SlidingCart({ show, setShow, setCartItems, cartItems }) {
  const cartElement = useRef(null);
  const overlayElement = useRef(null);
  let [umount, setUmount] = useState(true);

  function handleRemove() {
    setUmount(true);
  }
  // TODO: understand this sorcery
  useEffect(() => {
    const cart = cartElement.current;
    const overlay = overlayElement.current;
    if (show) {
      setUmount(false);
      if (!cart) return;
      if (!overlay) return;
      cart.animate(slideIn, { duration: 300, fill: "forwards" });
      overlay.animate(fadeIn, { duration: 300, fill: "forwards" });

      return;
    }
    if (!cart) return;
    if (!overlay) return;
    overlay.animate(fadeOut, { duration: 300, fill: "forwards" });
    const animation = cart.animate(slideOut, {
      duration: 300,
      fill: "forwards",
    });
    animation.onfinish = handleRemove;
  }, [umount, show]);

  return (
    !umount &&
    createPortal(
      <>
        <Overlay ref={overlayElement} onClick={() => setShow(!show)} />
        <StyledSlide ref={cartElement}>
          <Header>
            <p>Cart</p>
            <CloseBtn onClick={() => setShow(!show)}>
              <Cross />
            </CloseBtn>
          </Header>
          <div>
            <CartPage setCartItems={setCartItems} cartItems={cartItems} />
          </div>
        </StyledSlide>
      </>,
      document.getElementById("portal"),
    )
  );
}

const CloseBtn = styled.button`
  border: none;
  line-height: 0;
  background-color: transparent;
`;

function Cross() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0;
  z-index: 99998;
`;
const StyledSlide = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fafafa;
  color: black;
  width: 100%;
  max-height: 100vh;
  max-width: 500px;
  transform: translateX(100%);
  z-index: 99999;
  padding: 0 2rem;
`;

const Header = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const slideIn = [
  {
    transform: "translateX(100%)",
  },
  {
    transform: "translateX(0)",
  },
];
const slideOut = [
  {
    transform: "translateX(0)",
  },
  {
    transform: "translateX(100%)",
  },
];
const fadeIn = [
  {
    opacity: 0,
  },
  {
    opacity: 0.5,
  },
];
const fadeOut = [
  {
    opacity: 0.5,
  },
  {
    opacity: 0,
  },
];
