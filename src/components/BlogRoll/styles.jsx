import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1em;
`;

export const Article = styled.article`
  border: 1px solid var(--e-global-color-6ff3f7ee);
  padding: 0.25rem;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  height: 0;
  padding-bottom: 66%;
  position: relative;
  width: 100%;

  /* img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  } */
`;

export const Header = styled.header``;
