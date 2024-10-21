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
  padding: 5rem 0;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ImgCard = styled.div`
  position: relative;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  & img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  &:hover {
    opacity: 0.9;
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
  margin: 0 auto;
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
