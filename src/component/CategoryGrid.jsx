import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function CategoryGrid({ data }) {
  return (
    <Grid>
      {data.map((el) => (
        <ImgCard key={el.id}>
          <NavLink to={`shop/category/${el.category}`}>
            <img src={el.src} alt={el.title} />
          </NavLink>
          <Text>{el.category}</Text>
        </ImgCard>
      ))}
    </Grid>
  );
}

const ImgCard = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const Text = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5em 1em;
  font-size: 1.2rem;
  background-color: black;
  color: white;
`;

const Grid = styled.div`
  margin: 5rem auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 200px;
  max-width: 900px;
  & > div:nth-child(4) {
    grid-column: span 2;
  }
  & > div:nth-child(3) {
    grid-row: span 2;
  }
`;
