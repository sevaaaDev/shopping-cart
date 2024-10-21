import { useState } from "react";
import s from "./ProductHeroCarousel.module.css";
import styled from "styled-components";
import { Container } from "./Container";
import { NavLink } from "react-router-dom";
import bgImg from "../perry-merrity-ii-gPrJi5R4RAk-unsplash.webp";
// TODO: hero design on mobile
export function ProductHero({ data }) {
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
          <Button to="/shop">Shop Now</Button>
        </div>
      </Content>
    </Hero>
  );
}

const Button = styled(NavLink)`
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

const Heading = styled.h2`
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
  padding: 4rem 4rem;
  text-align: center;
  max-width: 900px;
  margin: auto;
  p {
    color: white;
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;
