import { useLoaderData, useOutletContext } from "react-router-dom";
import { BackButton } from "../component/BackButton";
import { ProductDetail } from "../component/ProductDetail";
import styled from "styled-components";

export async function productLoader({ params }) {
  const data = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
  ).then((res) => res.json());
  console.log(data);
  return data;
}

export function ProductPage() {
  const data = useLoaderData();
  const { setCartItems, cartItems } = useOutletContext();
  return (
    <Wrapper>
      <BackButton />
      <ProductDetail
        data={data}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-inline: 2rem;
`;
