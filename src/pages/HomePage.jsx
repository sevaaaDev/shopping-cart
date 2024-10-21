import { useLoaderData } from "react-router-dom";
import { ProductHero } from "../component/ProductHeroCarousel";
import { CategoryGrid } from "../component/CategoryGrid";

export function HomePage() {
  let data = useLoaderData();

  console.log(data);
  return (
    <div>
      <ProductHero data={data.at(-1)} />
      <CategoryGrid data={data.slice(0, 4)} />
    </div>
  );
}

export async function homePageLoader() {
  // fetch 1 item from every category
  let category = ["jewelery", "men's clothing", "women's clothing"];

  let data = await Promise.all([
    ...category.map((el) =>
      fetch(`https://fakestoreapi.com/products/category/${el}?limit=1`).then(
        (res) => res.json(),
      ),
    ),
    fetch(`https://fakestoreapi.com/products/14`).then((res) => res.json()),
    fetch(`https://fakestoreapi.com/products/16`).then((res) => res.json()),
  ]);

  data = data.flat();
  data = data.map((el) => ({ ...el, src: el.image }));
  return data;
}
