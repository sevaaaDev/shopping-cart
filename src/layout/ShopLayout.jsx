import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import s from "./ShopLayout.module.css";
import styled from "styled-components";
import { Container } from "../component/Container";
import { ShopNavBar } from "../component/ShopNavBar";

export async function categoriesLoader() {
  const data = await fetch("https://fakestoreapi.com/products/categories").then(
    (res) => res.json(),
  );
  return data;
}

export function ShopLayout() {
  const data = useLoaderData();

  return (
    <ShopContainer>
      <ShopNavBar categories={data} />
      <Outlet />
    </ShopContainer>
  );
}
const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  ${Container}
  @media (width < 780px) {
    display: block;
  }
`;
