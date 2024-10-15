import styled from "styled-components";
import { NavLink } from "react-router-dom";
export function ShopNavBar({ categories }) {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/shop" end>
            All
          </StyledNavLink>
        </li>
        {categories.map((el, index) => (
          <li key={index}>
            <StyledNavLink to={"category/" + el}>{el}</StyledNavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
}

const NavList = styled.ul`
  list-style-type: none;
  padding: 1rem 0rem;
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  color: black;
  opacity: 0.5;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;

  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: 0.7;
  }
  &.pending {
    opacity: 0.7;
  }
`;
