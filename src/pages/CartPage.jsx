import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";

export function CartPage() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);

  function deleteItems(id) {
    console.log(id);
    setCartItems((items) => items.filter((el) => el.id !== id));
  }
  return (
    <div>
      <ul>
        {cartItems.map((el) => (
          <ProductCartCard
            el={el}
            key={el.id}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </ul>
      <div>total price:{cartItems.reduce((a, b) => a + b.totalPrice, 0)}</div>
    </div>
  );
}

// TODO: add img

function ProductCartCard({ el, setCartItems, cartItems }) {
  function inc() {
    let newItems = [...cartItems];
    newItems = newItems.map((e) => {
      if (e.id === el.id) {
        e.quantity += 1;
      }
      return e;
    });
    setCartItems(newItems);
  }

  function dec() {
    let newItems = [...cartItems];
    newItems = newItems.map((e) => {
      if (e.id === el.id) {
        e.quantity -= 1;
      }
      return e;
    });
    setCartItems(newItems);
  }

  function deleteItem() {
    let newItems = [...cartItems];
    newItems = newItems.filter((e) => e.id !== el.id);
    setCartItems(newItems);
  }

  return (
    <li>
      {el.title}{" "}
      <button disabled={el.quantity === 1} onClick={dec}>
        -
      </button>{" "}
      {el.quantity} <button onClick={inc}>+</button>
      <button onClick={deleteItem}>delete</button>
      {el.totalPrice}
    </li>
  );
}
