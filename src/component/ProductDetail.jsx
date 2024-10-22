import styled from "styled-components";
import { useState } from "react";
import { ButtonCTA } from "../component/ProductHeroCarousel";
import { toCapitalize } from "../utils/toCapitalize";
export function ProductDetail({ data, setCartItems, cartItems }) {
  return (
    <ProductWrapper>
      <ImgWrapper>
        <img src={data.image} alt="" />
      </ImgWrapper>
      <Content
        title={data.title}
        category={data.category}
        description={data.description}
        price={data.price}
        setCartItems={setCartItems}
        cartItems={cartItems}
        data={data}
      />
    </ProductWrapper>
  );
}

// TODO: modularize

function Content({
  title,
  category,
  description,
  price,
  setCartItems,
  cartItems,
  data,
}) {
  const [quantity, setQuantity] = useState(1);
  function addtocart() {
    setQuantity(1);
    let newCartItems = [
      ...cartItems,
      {
        ...data,
        quantity: quantity,
        get totalPrice() {
          return this.quantity * this.price;
        },
      },
    ];
    // if there are the same product in cart, combine them
    setCartItems(
      newCartItems.reduce((a, b) => {
        if (a.at(-1)?.id === b.id) {
          a.at(-1).quantity += b.quantity;
          return a;
        }
        return [...a, b];
      }, []),
    );
  }
  return (
    <ContentStyle>
      <h1 className="title">{title}</h1>
      <Category>{toCapitalize(category)}</Category>
      <p>{description}</p>
      <Price>${price}</Price>
      <Quantity>
        <Btn setQuantity={setQuantity} quantity={quantity} increment={false} />
        <p>{quantity}</p>
        <Btn setQuantity={setQuantity} quantity={quantity} increment={true} />
      </Quantity>
      <ButtonCTA as="button" onClick={addtocart}>
        Add to cart
      </ButtonCTA>
    </ContentStyle>
  );
}

function Btn({ setQuantity, quantity, increment }) {
  return (
    <IncDecBtn
      disabled={!increment && quantity === 1}
      onClick={
        increment
          ? () => setQuantity((q) => q + 1)
          : () => setQuantity((q) => q - 1)
      }
    >
      {increment ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
      )}
    </IncDecBtn>
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
const Category = styled.p`
  opacity: 0.6;
  & + P {
    margin-block: 1rem;
  }
`;

const IncDecBtn = styled.button`
  line-height: 0;
  padding: 0.2rem;
  border-radius: 0px;
  background-color: inherit;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;
const ContentStyle = styled.div`
  flex: 1 1 200px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    font-size: 1.2rem;
  }
  margin-block: 0.5rem;
`;
