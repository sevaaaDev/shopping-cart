import { useState } from "react";
import s from "./GameImage.module.css";
export function GameImage({ src, alt }) {
  return (
    <div className={s.img}>
      <img src={src} alt={alt} />
    </div>
  );
}

function getCurrentPageData(page, data) {
  let start = page * 5 - 5;
  let end = start + 5;
  return data.slice(start, end);
}
export function GameListHorizontal({ data }) {
  const [page, setPage] = useState(1);
  let currentPageData = getCurrentPageData(page, data);
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
        {currentPageData.map((el, index) => (
          <GameImage src={el.src} alt={el.alt} key={index} />
        ))}
      </div>
    </div>
  );
}
