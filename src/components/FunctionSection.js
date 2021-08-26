import React from "react"
import styled from "styled-components"
import GoldDivider from "./GoldDivider.js"
import Button from "./Button.js"

import { useInView } from "react-intersection-observer"
import { fadeIn, textAnimationStyles } from "./animations"

import FunctionImg from "../images/function-house-exterior.jpg"

import floorplanOneFile from "../downloads/Lauker Floorplan_v6-1.pdf"
import floorplanTwoFile from "../downloads/Lauker Floorplan_v6-2.pdf"

const TextContainer = styled.div`
  color: #ecede6;
  width: 28vw;
  align-self: center;

  &.animate {
    ${textAnimationStyles}
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
    align-self: center;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 42vw;
  }
`

const StyledSection = styled.div`
  height: 100vh;
  padding-left: 140px;

  display: flex;

  background-image: url(${FunctionImg});
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

const LinkTwo = styled.a`
  margin-left: 1rem;

  @media screen and (max-width: 320px) {
    margin-left: 0;
    display: block;
    margin-top: -3rem;
  }
`

const FunctionsContainer = styled.div`
  width: 58vw;
  margin-top: 4rem;
  color: #ecede6;

  font-family: futura-pt;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  line-height: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &.animate {
    opacity: 0;
    ${fadeIn}
    -webkit-animation: fadeIn 0.7s ease-in 1.3s forwards;
    animation: fadeIn 0.7s ease-in 1.3s forwards;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    font-size: 30px;
    line-height: 2.1rem;
  }
`

const FunctionsColumn = styled.div`
  width: 36%;

  > p {
    margin-top: 2.3rem;
  }
`

const MobileFunctionsContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 3.5rem;

    font-family: futura-pt;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 1.4rem;

    > p {
      margin-top: 0.5rem;
    }

    &.animate {
      opacity: 0;
      ${fadeIn}
      -webkit-animation: fadeIn 0.7s ease-in 1.3s forwards;
      animation: fadeIn 0.7s ease-in 1.3s forwards;
    }
  }
`

const FunctionSection = ({
  heading,
  thirdHeading,
  fourthHeading,
  description,
}) => {
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

          <MobileFunctionsContainer className={inView ? "animate" : null}>
            <p>Accessible design</p>
            <p>Walk-out basement</p>
            <p>Tarion warranty</p>
            <p>NetZero Ready energy-efficient construction</p>
            <p>Zoned temperature control</p>
            <p>Large bedrooms, each with ensuites</p>
          </MobileFunctionsContainer>

          <a href={floorplanOneFile} download>
            <Button
              text="Download Floorplan 1"
              className={inView ? "animate-button" : null}
            ></Button>
          </a>
          <LinkTwo href={floorplanTwoFile} download>
            <Button
              text="Download Floorplan 2"
              className={inView ? "animate-button" : null}
            ></Button>
          </LinkTwo>
        </TextContainer>
        <FunctionsContainer className={inView ? "animate" : null}>
          <FunctionsColumn>
            <p>Accessible design</p>
            <p>Walk-out basement</p>
            <p>Tarion warranty</p>
          </FunctionsColumn>
          <FunctionsColumn>
            <p>NetZero Ready energy-efficient construction</p>
            <p>Zoned temperature control</p>
            <p>Large bedrooms, each with ensuites</p>
          </FunctionsColumn>
        </FunctionsContainer>
      </StyledSection>
    </div>
  )
}

export default FunctionSection
