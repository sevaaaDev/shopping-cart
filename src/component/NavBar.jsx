import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import styled from "styled-components";
export function NavBar({ cart }) {
  return (
    <StyledNav>
      <Logo to="/">
        <h1>
          Robbed.<span>store</span>
        </h1>
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
  padding: 1.5rem 0;
  ${Container}
  background-color: black;
`;

const Logo = styled(NavLink)`
  margin-right: auto;
  text-decoration: none;
  color: white;
  span {
    color: #00bfff;
  }
`;

const Navlink = styled(NavLink)`
  padding: 0.5rem 0;
  color: white;
  text-decoration: none;

  &.active,
  &:hover {
    border-bottom: 2px solid white;
  }
`;

function SearchBar() {
  return <input type="text" />;
}
