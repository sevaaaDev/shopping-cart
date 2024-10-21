import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { toCapitalize } from "../utils/toCapitalize";
export function ShopNavBar({ categories }) {
  // TODO: add margin to h3
  // add padding to ul
  return (
    <StyledNav>
      <H3>Category</H3>
      <NavList>
        <li>
          <StyledNavLink to="/shop" end>
            All product
          </StyledNavLink>
        </li>
        {categories.map((el, index) => (
          <li key={index}>
            <StyledNavLink to={"category/" + el}>
              {toCapitalize(el)}
            </StyledNavLink>
          </li>
        ))}
      </NavList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 0 2rem 0 0;
`;

const H3 = styled.h3`
  font-size: 2rem;
`;
const NavList = styled.ul`
  list-style-type: none;
  overflow: auto;
  margin: 0rem 0 1rem;
  padding-left: 1rem;
  margin-top: 0.5rem;
  @media (width <= 768px) {
    display: flex;
    padding: 0.5rem 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  color: black;
  opacity: 0.5;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 0;
  font-size: 1.2rem;
  white-space: nowrap;

  &.active {
    opacity: 1;
  }

  &:hover:not(.active) {
    opacity: 0.7;
  }
`;
