import { Link, useOutletContext } from "react-router-dom";

export function CartPage() {
  const { cartItems } = useOutletContext();
  return (
    <div>
      <ul>
        {cartItems.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
