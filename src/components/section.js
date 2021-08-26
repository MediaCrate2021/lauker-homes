import React from "react"
import styled from "styled-components"
import HeroImg from "../images/hero-exterior-texture.jpg"
import GoldDivider from "./GoldDivider.js"
import Button from "./Button.js"

const StyledSection = styled.section`
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

  @media screen and (max-width: 640px) {
    width: 80vw;
    align-self: center;
  }
`

const Section = ({ heading, thirdHeading, fourthHeading, description }) => (
  <StyledSection>
    <TextContainer>
      <h3>{thirdHeading}</h3>
      <h1>{heading}</h1>
      <GoldDivider></GoldDivider>
      <h4>{fourthHeading}</h4>
      <Button text="CTA"></Button>
    </TextContainer>
  </StyledSection>
)

export default Section
