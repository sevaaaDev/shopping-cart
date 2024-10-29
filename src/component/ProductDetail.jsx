import styled, { keyframes } from "styled-components";
import { Content } from "./ProductDetailContent";
import { loadingAnimation } from "../utils/animation";
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

export function ProductDetailSkeleton() {
  return (
    <ProductWrapper>
      <Img />
      <Div>
        <Text $height={32} />
        <Text $height={32} $width={50} />
        <Text $mtop={1} />
        <Text />
        <Text $height={32} $width={20} $mtop={2} />
        <Text $height={24} $width={30} />
      </Div>
    </ProductWrapper>
  );
}

const Div = styled.div`
  flex-grow: 1;
  animation: ${loadingAnimation} 0.5s infinite;
`;

const Img = styled.div`
  width: 400px;
  height: 400px;
  background-color: #eee;
  animation: ${loadingAnimation} 0.5s infinite;
`;

const Text = styled.p`
  background-color: #eee;
  height: ${(props) => props.$height || 16}px;
  width: ${(props) => props.$width || 100}%;
  margin-top: ${(props) => props.$mtop || 0.5}rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin-inline: auto;
  flex-wrap: wrap;
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
