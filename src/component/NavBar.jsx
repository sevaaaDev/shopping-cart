import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
export function NavBar({ cart }) {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.logo}>
        <h1>GameShop</h1>
      </NavLink>
      <SearchBar />
      <div className={s.wrapper}>
        <NavLink to="shop">Shop</NavLink> {/* change to styled navlink*/}
        <NavLink to="cart">Cart ({cart})</NavLink>
      </div>
    </nav>
  );
}

function SearchBar() {
  return <input type="text" />;
}
