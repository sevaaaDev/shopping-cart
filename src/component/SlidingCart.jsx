import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export function SlidingCart({ show, setShow }) {
  const el = useRef(null);
  let [umount, setUmount] = useState(true);

  function handleRemove() {
    setUmount(true);
  }
  // TODO: understand this sorcery
  useEffect(() => {
    const element = el.current;
    if (show) {
      setUmount(false);
      if (!element) return;
      element.animate(slideIn, { duration: 500, fill: "forwards" });
      return;
    }
    if (!element) return;
    const animation = element.animate(slideOut, {
      duration: 500,
      fill: "forwards",
    });
    animation.onfinish = handleRemove;
  }, [umount, show]);

  return (
    !umount &&
    createPortal(
      <StyledSlide ref={el}>
        Hello
        <button onClick={() => setShow(!show)}>Click</button>
      </StyledSlide>,
      document.getElementById("portal"),
    )
  );
}

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
const StyledSlide = styled.div.attrs((props) => ({
  $animation: props.$animation,
}))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  color: white;
  width: 100%;
  max-width: 400px;
`;
