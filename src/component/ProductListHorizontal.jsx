import { useEffect, useState } from "react";
import s from "./ProductListHorizontal.module.css";
import { ProductCard } from "./ProductCard";

export function ProductListHorizontal() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  //let currentPageData = getCurrentPageData(page, data);
  useEffect(() => {
    async function fetching() {
      let data = await fetch(
        `https://api.rawg.io/api/games?key=9f9e5ef1c8b847fbaf786a1ca1fa2823&page=${page}&page_size=4`,
      ).then((res) => res.json());

      data = data.results.map((el) => ({
        src: el.background_image,

        title: el.name,
      }));

      setData(data);
    }
    fetching();
  }, [page]);
  if (!data) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className={s.navigationWrapper}>
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          prev
        </button>
        <button
          disabled={page === 4}
          onClick={() => setPage((page) => page + 1)}
        >
          next
        </button>
      </div>
      <div className={s.gameListHorizontal}>
        {data.map((el, index) => (
          <ProductCard src={el.src} alt={el.alt} key={index} title={el.title} />
        ))}
      </div>
    </div>
  );
}
