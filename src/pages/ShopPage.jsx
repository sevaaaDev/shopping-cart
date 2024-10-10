import { useLoaderData, useNavigation } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";
import { ProductListGrid } from "../component/ProductListGrid";
import s from "./ShopPage.module.css";

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
