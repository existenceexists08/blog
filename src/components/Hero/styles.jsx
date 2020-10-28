import styled, { css, keyframes } from "styled-components";
import { Container } from "../styles";

export const Overlay = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: transparent;
  background-image: radial-gradient(at center center, #153243 0%, #1a6c7a 100%);
  opacity: 0.5;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
`;

export const HeroContainer = styled(Container)`
  align-items: center;
  display: flex;
  /* min-height: 70vh; */
  position: relative;
  z-index: 2;
`;

export const Text = styled.div`
  color: #fff;
  padding: 2em 0;
  text-align: left;
  text-shadow: 4px 4px 5px rgba(50, 50, 50, 1);
  width: 100%;

  h2 {
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 4em;
    font-weight: 500;
    line-height: initial;
    padding: 0;

    a {
      display: inline-block;
      margin-right: 0.5em;
      padding-right: 1em;
      position: relative;
      &:after {
        color: rgba(255, 255, 255, 0.9);
        content: "/";
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  * {
    color: #fff;
  }

  @media (max-width: 479px) {
    h1 {
      font-size: 2.25em;
    }
  }
`;

const pageBannerCSS = css`
  background-attachment: fixed;
  background-color: #494949;
  background-image: url(https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/landscape-mountains-sky-4843193.jpg);
  background-position: bottom center;
  background-size: cover;
  height: auto;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 200px 0px 100px 0px;

  ${Overlay} {
    background-color: transparent;
    background-image: linear-gradient(180deg, #153243 0%, #1a6c7a 100%);
    opacity: 0.6;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  }

  ${Container} {
    /* max-width: 1140px; */
    min-height: 0;
    height: auto;
  }

  ${Text} {
    text-align: ${({ type }) => (type === "page" ? "center" : "left")};
    text-shadow: none;
    h1 {
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  position: relative;
`;

export const HomeBGContainer = styled.div`
  height: 100%;
  /* opacity: 0.2; */
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  @media (min-width: 992px) {
    /* opacity: 0.5; */
    width: 50%;
  }
`;

const bounce4 = keyframes`
0% {
  transform: translate(0px, 0px);
}
50% {
  transform: translate(-80px, -80px);
}
100% {
  transform: translate(0px, 0px);
}
`;
const bounce3 = keyframes`
0% {
  transform: translate(0px, 0px);
}
50% {
  transform: translate(-60px, -60px);
}
100% {
  transform: translate(0px, 0px);
}
`;
const bounce2 = keyframes`
0% {
  transform: translate(0px, 0px);
}
50% {
  transform: translate(-40px, -40px);
}
100% {
  transform: translate(0px, 0px);
}
`;
const bounce1 = keyframes`
0% {
  transform: translate(0px, 0px);
}
50% {
  transform: translate(-20px, -20px);
}
100% {
  transform: translate(0px, 0px);
}
`;

export const HomeBG = styled.div`
  position: absolute;
  height: 100%;
  transform: rotate(30deg) skew(-25deg) scale(0.8);
  transition: 0.5s;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-gap: 10px; */
  width: 100%;

  .item {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 10px;
    transition: border 0.2s linear;

    &:before {
      content: "";
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      border-radius: 15px;
      position: absolute;
      height: calc(100% - 20px);
      width: calc(100% - 20px);
      opacity: 0.5;
      top: 10px;
      left: 10px;
    }

    &:after {
      border-radius: 15px;
      content: "";
      position: absolute;
      top: 10px;
      left: 10px;
      height: calc(100% - 20px);
      opacity: 0;
      transition: opacity 0.3s linear;
      box-shadow: 0px 0px 29px 6px rgba(20, 255, 236, 1);
      width: calc(100% - 20px);
    }

    svg {
      position: absolute;
      /* transition: 1s cubic-bezier(0.25, 1.55, 0.74, 0); */
      transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      width: 80%;
      height: auto;
      fill: var(--blue-light);
      stroke: var(--blue-light);
      opacity: 0.2;
      &#ballot {
        stroke: none;
      }
      &.gadsden {
        width: 100%;
      }
      &.feminist {
        width: 55%;
      }

      /* &:nth-child(3) {
        opacity: calc(0.6 * 0.2);
      } */
      &:nth-child(1) {
        opacity: calc(0.4 * 0.2);
      }
      /* &:nth-child(1) {
        opacity: calc(0.2 * 0.2);
      } */
      @media (min-width: 992px) {
        opacity: 0.5;

        /* &:nth-child(3) {
          opacity: calc(0.6 * 0.5);
        } */
        &:nth-child(1) {
          opacity: calc(0.4 * 0.5);
        }
        /* &:nth-child(1) {
          opacity: calc(0.2 * 0.5);
        } */
      }
    }

    &.isActive {
      border-color: var(--blue-light);

      &:after {
        opacity: 1;
      }
      svg {
        &:nth-child(4) {
          /* animation: ${bounce4} 2s cubic-bezier(0.25, 1.55, 0.74, 0); */
          animation: ${bounce4} 2s cubic-bezier(0.46, 1.27, 0.53, -0.14);
        }
        &:nth-child(3) {
          /* animation: ${bounce3} 2s cubic-bezier(0.25, 1.55, 0.74, 0); */
          animation: ${bounce3} 2s cubic-bezier(0.46, 1.27, 0.53, -0.14);
        }
        &:nth-child(2) {
          /* animation: ${bounce4} 2s cubic-bezier(0.25, 1.55, 0.74, 0); */
          /* animation: ${bounce4} 2s cubic-bezier(0.46, 1.27, 0.53, -0.14); */
          animation: ${bounce1} 2s ease-in-out;
        }

        &:nth-child(1) {
          display: none;
          /* animation: ${bounce2} 2s cubic-bezier(0.25, 1.55, 0.74, 0); */
          /* animation: ${bounce2} 2s cubic-bezier(0.46, 1.27, 0.53, -0.14); */
          animation: ${bounce2} 2s ease-in-out;
        }
      }
    }
  }
`;

export const Banner = styled.section`
  background: var(--gray-dark);
  background-size: cover;
  box-sizing: border-box;
  color: rgb(98, 95, 95);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${Container} {
    height: 55vh;
  }

  @media (min-width: 480px) {
    height: ${({ type }) => (type === "home" ? "75vh" : "auto")};
  }

  ${({ type }) => type !== "home" && pageBannerCSS}
  @media (min-width: 992px) {
    justify-content: center;
    ${Container} {
      height: auto;
    }
    ${Text} {
      width: ${({ type }) => (type === "home" ? "40%" : "100%")};
    }
  }
`;
