import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export function SlidingCart({ show, setShow }) {
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
      cart.animate(slideIn, { duration: 500, fill: "forwards" });
      overlay.animate(fadeIn, { duration: 500, fill: "forwards" });

      return;
    }
    if (!cart) return;
    if (!overlay) return;
    overlay.animate(fadeOut, { duration: 500, fill: "forwards" });
    const animation = cart.animate(slideOut, {
      duration: 500,
      fill: "forwards",
    });
    animation.onfinish = handleRemove;
  }, [umount, show]);

  return (
    !umount &&
    createPortal(
      <>
        <Overlay ref={overlayElement} />
        <StyledSlide ref={cartElement}>
          <Header>
            <p>Cart</p>
            <button onClick={() => setShow(!show)}>X</button>
          </Header>
        </StyledSlide>
      </>,
      document.getElementById("portal"),
    )
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 99998;
`;
const StyledSlide = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  color: white;
  width: 100%;
  max-height: 100vh;
  max-width: 400px;
  z-index: 99999;
`;

const Header = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
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
