import styled from "styled-components";
import { Content } from "./ProductDetailContent";
export function ProductDetail({ data, setCartItems, cartItems }) {
  return (
    <ProductWrapper>
      <ImgWrapper>
        <img src={data.image} alt="" />
      </ImgWrapper>
      <Content setCartItems={setCartItems} cartItems={cartItems} data={data} />
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin-inline: auto;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

const ImgWrapper = styled.div`
  max-width: 400px;
  background-color: white;
  padding: 1rem;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;
