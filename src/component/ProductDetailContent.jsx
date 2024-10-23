import { useState } from "react";
import { toCapitalize } from "../utils/toCapitalize";
import { BtnQuantity } from "./IncDecBtn";
import { ButtonCTA } from "../component/ProductHeroCarousel";
import styled from "styled-components";
export function Content({ setCartItems, cartItems, data }) {
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
      <h1 className="title">{data.title}</h1>
      <Category>{toCapitalize(data.category)}</Category>
      <p>{data.description}</p>
      <Price>${data.price}</Price>
      <Quantity>
        <BtnQuantity
          setQuantity={setQuantity}
          quantity={quantity}
          increment={false}
        />
        <p>{quantity}</p>
        <BtnQuantity
          setQuantity={setQuantity}
          quantity={quantity}
          increment={true}
        />
      </Quantity>
      <ButtonCTA as="button" onClick={addtocart}>
        Add to cart
      </ButtonCTA>
    </ContentStyle>
  );
}
const Category = styled.p`
  opacity: 0.6;
  & + P {
    margin-block: 1rem;
  }
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
