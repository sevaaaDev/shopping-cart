import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import s from "./ProductCard.module.css";
export function ProductCard({ src, title, id, price }) {
  return (
    <NavCard className={""} to={`/product/${id}`}>
      <ImgContainer className={s.img}>
        <img src={src} alt={title} />
      </ImgContainer>
      <Description>
        <OneLineTitle>{title}</OneLineTitle>
        <Price>${price}</Price>
        <p>V 3.99</p>
      </Description>
    </NavCard>
  );
}

const NavCard = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  border-radius: 1rem;
  text-decoration: none;
  box-shadow: 1px 1px 10px #ddd;
`;

const Description = styled.div`
  margin: 0.5rem;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const OneLineTitle = styled.p`
  width: 250px;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  white-space: pre;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  background: white;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

// TODO: style
