import { useLoaderData } from "react-router-dom";
import { ProductListHorizontal } from "../component/ProductListHorizontal";
import { ProductHeroCarousel } from "../component/ProductHeroCarousel";

const data = [
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/200/200?fit=cover&position=top",
    alt: "kakakkak",
  },
];

const carousel = [
  {
    src: "https://placecats.com/800/300",
    alt: "kakakkak",
  },
  {
    src: "https://placecats.com/millie/800/300",
    alt: "kakakkak",
  },
];

export function HomePage() {
  let data = useLoaderData();
  return (
    <div>
      <ProductListHorizontal data={data} />
    </div>
  );
}

export async function homePageLoader() {
  let data = await fetch(
    "https://fakestoreapi.com/products/category/electronics",
  ).then((res) => res.json());

  data = data.map((el) => ({
    src: el.image,
    title: el.title,
    id: el.id,
  }));
  return data;
}
