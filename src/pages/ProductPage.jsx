import {
  defer,
  Await,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";
import { BackButton } from "../component/BackButton";
import { Suspense } from "react";
import {
  ProductDetail,
  ProductDetailSkeleton,
} from "../component/ProductDetail";
import styled from "styled-components";

export async function productLoader({ params }) {
  const data = fetch(`https://fakestoreapi.com/products/${params.id}`);
  return defer({ data: data.then((res) => res.json()) });
}

export function ProductPage() {
  const { data } = useLoaderData();
  const { setCartItems, cartItems } = useOutletContext();
  return (
    <Wrapper>
      <BackButton />
      <Suspense fallback={<ProductDetailSkeleton />}>
        <Await resolve={data}>
          {(res) => (
            <ProductDetail
              data={res}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          )}
        </Await>
      </Suspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-inline: 2rem;
`;
