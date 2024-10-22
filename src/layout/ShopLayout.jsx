import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../component/Container";
import { ShopNavBar } from "../component/ShopNavBar";
import { toCapitalize } from "../utils/toCapitalize";

export async function categoriesLoader() {
  const data = await fetch("https://fakestoreapi.com/products/categories").then(
    (res) => res.json(),
  );
  return data;
}

export function ShopLayout() {
  const data = useLoaderData();
  const location = useLocation();
  let title = toCapitalize(
    decodeURI(location.pathname.slice(location.pathname.lastIndexOf("/") + 1)),
  );

  if (location.pathname === "/shop") {
    title = "All Product";
  }
  return (
    <div>
      <Heading>{title}</Heading>
      <ShopContainer>
        <ShopNavBar categories={data} />
        <Outlet />
      </ShopContainer>
    </div>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin-block: 2rem;
`;
const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  max-width: 1400px;
  margin-inline: auto;
  ${Container}
  @media (width < 768px) {
    display: block;
  }
`;
