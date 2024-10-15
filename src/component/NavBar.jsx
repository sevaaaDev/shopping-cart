import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import styled from "styled-components";
export function NavBar({ cart }) {
  return (
    <StyledNav>
      <Logo to="/">
        <h1>Shopping</h1>
      </Logo>
      <Navlink to="/">Home</Navlink>
      <Navlink to="shop">Shop</Navlink>
      <Navlink to="cart">Cart ({cart})</Navlink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  background-color: white;
  ${Container}
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

function SearchBar() {
  return <input type="text" />;
}
