import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import styled from "styled-components";
export function NavBar({ cart, showCart }) {
  return (
    <StyledNav>
      <Logo to="/">
        Robbed.<span>store</span>
      </Logo>
      <Navlink to="/">Home</Navlink>
      <Navlink to="shop">Shop</Navlink>
      {/* <Navlink to="cart">Cart ({cart})</Navlink>*/}
      <StyledCart onClick={showCart}>
        <Cart />
        <p>{cart}</p>
      </StyledCart>
    </StyledNav>
  );
}

function Cart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

const StyledCart = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  p {
    position: absolute;
    top: 0;
    right: 0;
    padding: 2px 6px;
    border-radius: 1rem;
    background-color: #6495ed;
    color: white;
    transform: translateX(80%) translateY(-30%);
  }
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 0;
  ${Container}
  background-color: #fafafa;
  box-shadow: 0px 1px 10px #eee;
`;

const Logo = styled(NavLink)`
  margin-right: auto;
  text-decoration: none;
  color: black;
  font-weight: bold;
  span {
    color: #6495ed;
  }
`;

const Navlink = styled(NavLink)`
  padding: 0.5rem 0;
  color: black;
  text-decoration: none;
  border-bottom: 2px solid #fafafa;

  &.active,
  &:hover {
    border-bottom: 2px solid black;
  }
`;

function SearchBar() {
  return <input type="text" />;
}
