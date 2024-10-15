import { useLoaderData, useNavigation } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";
import { ProductListGrid } from "../component/ProductListGrid";

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
  const { state, location } = useNavigation();

  console.log(data);
  return (
    <ProductListGrid>
      {data.map((el) => (
        <ProductCard
          key={el.id}
          src={el.image}
          title={el.title}
          id={el.id}
          price={el.price}
        />
      ))}
    </ProductListGrid>
  );
}
