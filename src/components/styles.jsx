import styled, { css } from "styled-components";

export const TwoCol = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;
  align-items: ${({ flex }) => flex === "start" && "flex-start"};

  p {
    margin-bottom: 2.8125em;
  }

  > * {
    width: calc(50% - 0.5em);

    &:first-child {
      margin-right: 1em;
    }
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    > * {
      width: 100%;

      &:first-child {
        margin-bottom: 2em;
        margin-right: 0;
      }
    }
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: ${({ type }) => (type === "small" ? "600px" : "100%")};

  @media screen and (min-width: 992px) {
    max-width: ${({ type }) => (type === "small" ? "600px" : "1240px")};
  }
`;

const CTASection = css`
  && {
    padding: 11.875em 0;
  }
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  text-align: center;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: transparent;
    background-image: radial-gradient(
      at center center,
      #153243 0%,
      var(--blue-gray) 100%
    );
    opacity: 0.6;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    z-index: 1;
  }

  > * {
    color: #fff;
    position: relative;
    z-index: 2;
  }

  h2 {
    color: #fff;
    font-weight: 600;
  }

  p {
    margin: 2.8125em 0;
  }
`;

export const Section = styled.section`
  padding: 6.25em 0;
  position: relative;
  ${({ type }) => type === "CTA" && CTASection}
  background-image: ${({ url }) => url && `url('${url}')`};
  ${({ fade }) =>
    fade &&
    css`
      background-color: transparent;
      background-image: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(26, 108, 122, 0.08) 100%
      );
    `}
`;

export const SectionHeading = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;
