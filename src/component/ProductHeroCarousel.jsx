import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bgImg from "../perry-merrity-ii-gPrJi5R4RAk-unsplash.webp";
// TODO: remove br, use max width
export function ProductHero() {
  return (
    <Hero>
      <Content>
        <div>
          <Heading>
            Best store with reasonable <br />
            price
          </Heading>
          <p>
            “The manager just robbed us. now i have to <br /> walk home with my
            bare hands”
            <br />- Stacy
          </p>
          <ButtonCTA to="/shop">Shop Now</ButtonCTA>
        </div>
      </Content>
    </Hero>
  );
}

// TODO: component button
export const ButtonCTA = styled(NavLink)`
  background-color: #00bfff;
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
`;

const Content = styled.div`
  padding: 8rem 4rem;
  text-align: center;
  max-width: 900px;
  margin: auto;
  p {
    color: white;
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;
