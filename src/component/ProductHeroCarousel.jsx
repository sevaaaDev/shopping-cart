import { useState } from "react";
import s from "./ProductHeroCarousel.module.css";
import styled from "styled-components";
import { Container } from "./Container";
import { NavLink } from "react-router-dom";
export function ProductHero({ data }) {
  return (
    <Hero>
      <Content>
        <div>
          <Heading>Give me all your Money</Heading>
          <Button to="/shop">Give Money</Button>
        </div>
        <ImgWrapper>
          <img src={data.src} alt={data.title} />
        </ImgWrapper>
      </Content>
    </Hero>
  );
}

const Button = styled(NavLink)`
  background-color: white;
  border-radius: 8px;
  padding: 0.5em 0.75em;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

const ImgWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  & img {
    width: 300px;
  }
`;

const Heading = styled.h2`
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Hero = styled.div`
  background-color: black;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
  gap: 4rem;
  max-width: 900px;
  margin: auto;
`;
