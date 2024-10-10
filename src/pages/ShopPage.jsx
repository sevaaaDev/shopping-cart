import { useLoaderData, useNavigation } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";
import { ProductListGrid } from "../component/ProductListGrid";
import s from "./ShopPage.module.css";

export async function shopLoader() {
  const data = await fetch(`https://fakestoreapi.com/products/`).then((res) =>
    res.json(),
  );
  return data;
}

export async function shopCategoryLoader({ params }) {
  const { name } = params;
  const data = await fetch(
    `https://fakestoreapi.com/products/category/${name}`,
  ).then((res) => res.json());
  return data;
}

export function ShopPage() {
  const data = useLoaderData();
  const { state } = useNavigation();
  console.log(data);
  if (state === "loading") {
    return <div>loading</div>;
  }
  return (
    <div>
      <ProductListGrid>
        {data.map((el) => (
          <ProductCard key={el.id} src={el.image} title={el.title} id={el.id} />
        ))}
      </ProductListGrid>
    </div>
  );
}
