import { css } from "styled-components";

export const Container = css`
  padding-inline: 2rem;
  margin: auto;
  @media (width <= 425px) {
    padding-inline: 1rem;
  }
`;
