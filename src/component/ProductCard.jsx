import s from "./GameImage.module.css";
export function ProductCard({ src, alt, title }) {
  return (
    <div className={""}>
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
