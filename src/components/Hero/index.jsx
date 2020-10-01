import React from "react";
import { Banner, Overlay, Container, Text } from "./styles";

const Hero = ({ type, title }) => {
  return (
    <Banner type={type} role="banner">
      <Overlay />
      <Container>
        <Text>
          {type === "home" && (
            <>
              <h2>welcome to</h2>
              <h1>Rebel Rabbits</h1>
              <p>Home of the old guard. Radicalism without hyperbole.</p>
            </>
          )}
          {type === "page" && <h1>{title}</h1>}
        </Text>
      </Container>
    </Banner>
  );
};

export default Hero;
