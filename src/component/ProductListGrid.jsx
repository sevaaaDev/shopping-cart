import s from "./ProductListGrid.module.css";
export function ProductListGrid({ children }) {
  return <div className={s.grid}>{children}</div>;
}
