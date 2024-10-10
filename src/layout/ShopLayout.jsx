import { Outlet, useSearchParams } from "react-router-dom";
import s from "./ShopLayout.module.css";
import { useEffect } from "react";

export async function shopLoader({ request }) {
  let category = new URL(request.url).searchParams.get("category");
  console.log(category);
  if (!category) {
    const data = await fetch(`https://fakestoreapi.com/products/`).then((res) =>
      res.json(),
    );
    return data;
  }
  category = category.split("|");
  //const data = await fetch(
  //  `https://fakestoreapi.com/products/category/${category}`,
  //).then((res) => res.json());
  let data = await Promise.all(
    category.map((el) =>
      fetch(`https://fakestoreapi.com/products/category/${el}`).then((res) =>
        res.json(),
      ),
    ),
  );
  data = data.flat();
  console.log(data);
  return data;
}
export function ShopLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  function changeCategory(e) {
    if (e.target.checked) {
      setSearchParams({ category: "electronics|jewelery" });
      return;
    }
    // TODO: add multiple values
    setSearchParams({});
  }
  const checked = searchParams.get("category") !== null;
  console.log(searchParams);
  return (
    <div className={s.layout}>
      <div>
        <label htmlFor="electronics">
          <input
            type="checkbox"
            id="electronics"
            checked={checked}
            onChange={changeCategory}
          />
          electronics
        </label>
      </div>
      <Outlet />
    </div>
  );
}
