import React from "react"
import styled from "styled-components"

import GoldDivider from "./GoldDivider.js"
import Button from "./Button.js"
import { useInView } from "react-intersection-observer"

import HeroImg from "../images/hero-exterior-texture.jpg"

import { textAnimationStyles } from "./animations"

const StyledSection = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 140px;
  padding-top: 38vh;

  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  @media screen and (max-width: 640px) {
    padding: 0 0;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    padding-left: 80px;
  }
`

const TextContainer = styled.div`
  color: #ecede6;

  &.animate {
    ${textAnimationStyles}
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
    align-self: center;
  }
`

const HeroSection = ({ heading, thirdHeading, fourthHeading, description }) => {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <div ref={ref}>
      <StyledSection>
        <TextContainer className={inView ? "animate" : null}>
          <h3>{thirdHeading}</h3>
          <h1>{heading}</h1>
          <GoldDivider
            className={inView ? "animate-divider" : null}
          ></GoldDivider>
          <h4>{fourthHeading}</h4>
          <a href="#contact">
            <Button
              text="Get in touch"
              className={inView ? "animate-button" : null}
            ></Button>
          </a>
        </TextContainer>
      </StyledSection>
    </div>
  )
}

export default HeroSection
