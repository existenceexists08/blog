import React from "react";
import { Banner, Overlay, Container, Text } from "./styles";

const Hero = () => {
  return (
    <Banner role="banner">
      <Overlay />
      <Container>
        <Text>
          <h2>welcome to</h2>
          <h1>Rebel Rabbits</h1>
          <p>Home of the old guard. Radicalism without hyperbole.</p>
        </Text>
      </Container>
    </Banner>
  );
};

export default Hero;
