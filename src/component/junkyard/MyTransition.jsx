import { useLayoutEffect, useState } from "react";
export function MyTransition({ show, children, nodeRef }) {
  const [umount, setUmount] = useState(true);
  // Layout effect is needed to fix flicker
  useLayoutEffect(() => {
    const cart = nodeRef.current;
    if (show) {
      setUmount(false);
      if (!cart) return;
      cart.classList.add("cart-enter");
      cart.scrollTop;
      cart.classList.add("cart-enter-active");
      cart.classList.remove("cart-enter");
      return;
    }
    if (!cart) return;
    cart.classList.remove("cart-enter-active");
    cart.classList.add("cart-exit");
    cart.scrollTop;
    cart.classList.add("cart-exit-active");
    cart.classList.remove("cart-exit");
    setTimeout(() => {
      setUmount(true);
    }, 300);
  }, [umount, show]);
  return !umount && <>{children}</>;
}
