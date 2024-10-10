import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import s from "./ShopLayout.module.css";

export async function categoriesLoader() {
  const data = await fetch("https://fakestoreapi.com/products/categories").then(
    (res) => res.json(),
  );
  return data;
}
export function ShopLayout() {
  const data = useLoaderData();

  return (
    <div className={s.layout}>
      <ShopNavBar categories={data} />
      <Outlet />
    </div>
  );
}

function ShopNavBar({ categories }) {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/shop">All</NavLink>
        </li>
        {categories.map((el, index) => (
          <li key={index}>
            <NavLink to={"category/" + el}>{el}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
