import { useNavigate } from "react-router-dom";
import s from "./ProductCard.module.css";
export function ProductCard({ src, alt, title, id }) {
  const navigate = useNavigate();
  function goToProduct() {
    navigate(`/product/${id}`);
  }
  return (
    <div className={""} onClick={goToProduct}>
      <div className={s.img}>
        <img src={src} alt={alt} />
      </div>
      <div className={s.description}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>$4.99</p>
      </div>
    </div>
  );
}

// TODO: style
