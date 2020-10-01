import styled, { css } from "styled-components";

const primaryCSS = css`
  background-color: var(--e-global-color-6ff3f7ee);
  border: solid 2px var(--e-global-color-6ff3f7ee);
  color: #fff;

  &:hover {
    color: #ffffff;
    background-color: rgba(0, 104, 122, 0.7);
    border-color: rgba(0, 104, 122, 0.7);
  }
`;

const transparentPrimaryCSS = css`
  background-color: rgba(0, 0, 0, 0);
  border: solid 2px var(--e-global-color-6ff3f7ee);
  color: var(--e-global-color-6ff3f7ee);

  &:hover {
    color: #ffffff;
    background-color: var(--e-global-color-6ff3f7ee);
    border-color: var(--e-global-color-6ff3f7ee);
  }
`;

const whiteCSS = css`
  background-color: #fff;
  border: solid 2px #fff;
  color: var(--e-global-color-6ff3f7ee);

  &:hover {
    color: #ffffff;
    background-color: var(--e-global-color-6ff3f7ee);
    border-color: var(--e-global-color-6ff3f7ee);
  }
`;

const transparentwhiteCSS = css`
  background-color: rgba(0, 0, 0, 0);
  border: solid 2px #fff;
  color: #fff;

  &:hover {
    color: #ffffff;
    background-color: var(--e-global-color-6ff3f7ee);
    border-color: var(--e-global-color-6ff3f7ee);
  }
`;

export const StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-family: var(--button-font);
  font-weight: var(--button-font-weight);
  letter-spacing: 2px;
  line-height: 1;
  outline: none;
  padding: 16px 40px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  ${({ type }) => type === "primary" && primaryCSS}
  ${({ type }) => type === "white" && whiteCSS}
  ${({ type }) => type === "transparentP" && transparentPrimaryCSS}
  ${({ type }) => type === "transparentW" && transparentwhiteCSS}

  a {
    color: inherit;
    text-decoration: none;
  }
`;
