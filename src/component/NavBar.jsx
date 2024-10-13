import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Logo = styled(NavLink)`
  margin-right: auto;
  color: black;
`;

const Navlink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

export function NavBar({ cart }) {
  return (
    <Nav>
      <Logo to="/">
        <h1>Shopping</h1>
      </Logo>
      <Navlink to="/">Home</Navlink>
      <Navlink to="shop">Shop</Navlink>
      <Navlink to="cart">Cart ({cart})</Navlink>
    </Nav>
  );
}

function SearchBar() {
  return <input type="text" />;
}
