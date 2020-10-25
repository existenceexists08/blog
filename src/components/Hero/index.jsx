import React, { useState, useEffect } from "react";
import {
  Banner,
  Overlay,
  HeroContainer,
  Text,
  HomeBGContainer,
  HomeBG,
  Wrapper,
} from "./styles";
import AnimatedBorder from "../AnimatedBorder";
import Agorist from "../../img/political/agorist.svg";
import All from "../../img/political/ALL.svg";
import Arrows from "../../img/political/Arrows.svg";
import AnCom from "../../img/political/AnCom.svg";
import Ballot from "../../img/political/ballot.svg";
import Democrat from "../../img/political/democrat.svg";
import Feminist from "../../img/political/feminist.svg";
import Gadsden from "../../img/political/gadsden.svg";
import Republican from "../../img/political/republican.svg";

const Hero = ({ type, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeBorderIndex, setActiveBorderIndex] = useState(null);

  const svgs = [
    Agorist,
    Democrat,
    Arrows,
    Ballot,
    All,
    Feminist,
    AnCom,
    Gadsden,
    Republican,
  ];

  const activateItem = () => {
    console.log("activeIndex", activeIndex);
    const newIndex = Math.floor(Math.random() * 9);
    setActiveIndex(newIndex === activeIndex ? newIndex + 1 : newIndex);
  };

  const activateBorder = () => {
    const newIndex = Math.floor(Math.random() * 9);
    setActiveBorderIndex(
      newIndex === activeBorderIndex ? newIndex + 1 : newIndex
    );
  };

  useEffect(() => {
    const borderInterval = setInterval(() => {
      //every 2 seconds
      activateBorder();
    }, 2000);
    return () => clearInterval(borderInterval);
  }, [activeBorderIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      //every 4 seconds
      activateItem();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <Banner type={type} role="banner">
      {type === "page" && <Overlay />}
      {type === "home" && (
        <HomeBGContainer>
          <Wrapper>
            <HomeBG>
              {svgs.map((Svg, index) => {
                const isTop = Math.floor(Math.random() * 2) === 0;
                return (
                  <div
                    className={`item ${
                      index === activeIndex ? "isActive" : ""
                    }`}
                  >
                    <Svg />
                    <Svg />
                    {/* <Svg />
                    <Svg /> */}
                    <AnimatedBorder
                      topRight={isTop}
                      isActive={index === activeBorderIndex}
                    />
                  </div>
                );
              })}
            </HomeBG>
          </Wrapper>
        </HomeBGContainer>
      )}
      <HeroContainer>
        <Text>
          {type === "home" && (
            <>
              <h2>welcome to</h2>
              <h1>Rebel Rabbits</h1>
              <p>
                Navigating the influences of the libertarian space. Guarding
                against bigorty and authoritarian entryism.
              </p>
            </>
          )}
          {type === "page" && <h1>{title}</h1>}
        </Text>
      </HeroContainer>
    </Banner>
  );
};

export default Hero;
