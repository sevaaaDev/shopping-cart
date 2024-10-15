import s from "./ProductListGrid.module.css";
import styled from "styled-components";
export function ProductListGrid({ children }) {
  return <ListGrid>{children}</ListGrid>;
}

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 1px 1px 10px inset #ddd;
`;
