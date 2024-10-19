import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import s from "./ProductCard.module.css";
// TODO: star rating icon
export function ProductCard({ src, title, id, price }) {
  return (
    <NavCard className={""} to={`/product/${id}`}>
      <ImgContainer className={s.img}>
        <img src={src} alt={title} />
      </ImgContainer>
      <Description>
        <OneLineTitle title={title}>{title}</OneLineTitle>
        <Price>${price}</Price>
        <p>V 3.99</p>
      </Description>
    </NavCard>
  );
}

const NavCard = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-decoration: none;
  box-shadow: 0px -1px 4px #ddd;
  background: #222;
  &:hover {
    opacity: 0.7;
  }
`;

const Description = styled.div`
  margin: 1rem;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
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
