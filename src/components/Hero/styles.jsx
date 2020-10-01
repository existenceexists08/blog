import styled from "styled-components";
export const Banner = styled.section`
  background-attachment: scroll;
  background-image: url(https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/landscape-mountains-sky-4843193.jpg);
  background-position-x: 50%;
  background-position-y: 35%;
  background-size: cover;
  box-sizing: border-box;
  color: rgb(98, 95, 95);
  display: block;
  height: 70vh;
  position: relative;
  width: 100%;
`;

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

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 700px;
  min-height: 70vh;
  position: relative;
  width: 80%;
`;

export const Text = styled.div`
  color: #fff;
  /* display: flex; */
  text-align: center;
  width: 100%;

  h2 {
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 4em;
    font-weight: 500;
    line-height: initial;
  }

  * {
    color: #fff;
  }
`;
