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
  overflow: auto;
  margin: 0rem 0 1rem;
  @media (width <= 768px) {
    display: flex;
    padding: 0.5rem 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  color: black;
  opacity: 0.3;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 0;
  font-weight: bold;
  font-size: 1.2rem;
  white-space: nowrap;

  &.active {
    opacity: 1;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.7;
  }
  &.pending {
    opacity: 0.7;
  }
`;
