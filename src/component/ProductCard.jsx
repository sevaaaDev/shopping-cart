import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toCapitalize } from "../utils/toCapitalize";
import star from "../assets/star.svg";
// TODO: star rating icon
export function ProductCard({ src, title, id, price, category, rating, sold }) {
  return (
    <NavCard className={""} to={`/product/${id}`}>
      <ImgContainer>
        <img src={src} alt={title} />
      </ImgContainer>
      <Description>
        <Price>${price}</Price>
        <OneLineTitle title={title}>{title}</OneLineTitle>
        <Category>{toCapitalize(category)}</Category>
        <Rating>
          <Star /> {rating} | Sold {sold}+
        </Rating>
      </Description>
    </NavCard>
  );
}

function Star() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
        fill="#FF9529"
      />
    </svg>
  );
}

const Rating = styled.p`
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const NavCard = styled(NavLink)`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-decoration: none;
  box-shadow: 0px 0px 10px #ddd;
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
