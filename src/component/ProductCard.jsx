import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toCapitalize } from "../utils/toCapitalize";
// TODO: star rating icon
export function ProductCard({ src, title, id, price, category }) {
  return (
    <NavCard className={""} to={`/product/${id}`}>
      <ImgContainer>
        <img src={src} alt={title} />
      </ImgContainer>
      <Description>
        <Price>${price}</Price>
        <OneLineTitle title={title}>{title}</OneLineTitle>
        <Category>{toCapitalize(category)}</Category>
        <p>V 3.99</p>
      </Description>
    </NavCard>
  );
}

const NavCard = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-decoration: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  &:hover {
    opacity: 0.9;
  }
`;

const Description = styled.div`
  padding: 0.5rem;
  position: relative;
  p:last-child {
    margin-top: 0.5rem;
  }
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-100%);
  background-color: black;
  color: white;
  padding: 0.5rem;
`;

const Category = styled.p`
  opacity: 0.6;
`;

const OneLineTitle = styled.p`
  font-size: 1.2rem;
  text-overflow: ellipsis;
  white-space: pre;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
