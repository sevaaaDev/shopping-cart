import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { ProductCard } from "../component/ProductCard";
import { ProductListGrid } from "../component/ProductListGrid";
import s from "./ShopPage.module.css";

export async function shopPageLoader({ params }) {
  const data = await fetch("https://fakestoreapi.com/products/").then((res) =>
    res.json(),
  );
  return data;
}

export function ShopPage({ params }) {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  function setFilter(e) {
    if (e.target.checked) {
      setSearchParams({ category: "electronics" });
      return;
    }
    setSearchParams({});
  }
  let filteredData = data.filter(
    (el) => el.category === searchParams.get("category"),
  );
  if (filteredData.length === 0) {
    filteredData = data;
  }
  return (
    <div>
      <div className={s.layout}>
        <div>
          <label htmlFor="electronic">
            <input
              type="checkbox"
              name="electronic"
              id="electronic"
              onChange={setFilter}
            />
            electronic
          </label>
        </div>
        <ProductListGrid>
          {filteredData.map((el) => (
            <ProductCard
              key={el.id}
              src={el.image}
              title={el.title}
              id={el.id}
            />
          ))}
        </ProductListGrid>
      </div>
    </div>
  );
}
