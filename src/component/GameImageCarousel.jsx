import { useState } from "react";
import s from "./GameImageCarousel.module.css";
export function GameImageCarousel({ data }) {
  const [page, setPage] = useState(1);
  let currentData = data[page - 1];
  function changePage(command) {
    if (page === data.length && command === "inc") {
      setPage(1);
      return;
    }
    if (command === "inc") {
      setPage((page) => page + 1);
      return;
    }
    if (page === 1 && command === "dec") {
      setPage(data.length);
      return;
    }
    if (command === "dec") {
      setPage((page) => page - 1);
      return;
    }
  }
  return (
    <div className={s.carousel}>
      <button className={s.prev} onClick={() => changePage("dec")}>
        prev
      </button>
      <button className={s.next} onClick={() => changePage("inc")}>
        next
      </button>
      <img src={currentData.src} alt={currentData.alt} className={s.img} />
    </div>
  );
}
