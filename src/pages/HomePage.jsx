import { useLoaderData } from "react-router-dom";
import { ProductListHorizontal } from "../component/GameImage";
import { ProductHeroCarousel } from "../component/GameImageCarousel";

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
  console.log(data);
  return (
    <div>
      <ProductHeroCarousel data={data} />
    </div>
  );
}
