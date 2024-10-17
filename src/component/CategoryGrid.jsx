import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function CategoryGrid({ data }) {
  return (
    <Wrapper>
      <h2>Browse Category</h2>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5rem 0;
  h2 {
    text-align: center;
  }
`;

const ImgCard = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 1px 1px 10px #ddd;
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
  &:hover ${ImgCard} {
    opacity: 0.4;
  }
  &:hover ${ImgCard}:hover {
    opacity: 1;
    scale: 1.1;
    translate: 0px 10px;
    z-index: 99;
  }
  & > * {
    pointer-events: auto;
  }
  pointer-events: none;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 1px 1px 10px inset #ddd;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 200px 200px;
  width: 90%;
  max-width: 900px;
  @media (width > 425px) {
    grid-template-columns: repeat(3, 1fr);
    & > div:nth-child(4) {
      grid-column: span 2;
    }
    & > div:nth-child(3) {
      grid-row: span 2;
    }
  }
`;
