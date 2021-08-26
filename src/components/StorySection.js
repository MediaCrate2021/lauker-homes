import React from "react"
import styled from "styled-components"
import GoldDivider from "./GoldDivider.js"

import { useInView } from "react-intersection-observer"

import NetZeroReadyLogo from "../images/story-section-images/netzero-ready-logo.png"
import TarionLogo from "../images/story-section-images/tarion-logo.png"

import ImgOne from "../images/story-section-images/living-room-5.webp"
import ImgTwo from "../images/story-section-images/house-2-img-1.webp"

import { fadeIn, raiseIn, textAnimationStyles } from "./animations"

const StyledSection = styled.section`
  height: 112.5vh;
  padding-left: 140px;

  padding-top: 27.4vh;

  display: flex;

  @media screen and (max-width: 640px) {
    display: block;
    height: 100%;

    padding-top: 9rem;
    padding-left: 0;
    padding-bottom: 0;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    position: relative;
    display: inline-block;
    height: 100%;

    padding: 0;
    padding-left: 80px;
    padding-top: 8.7rem;
    padding-bottom: 1rem;
  }
`

const TextContainer = styled.div`
  width: 28vw;
  margin-right: 8.75rem;
  display: inline-block;

  &.animate {
    ${textAnimationStyles}
  }

  @media screen and (max-width: 640px) {
    display: block;
    width: 81%;
    margin: 0 auto;
    margin-bottom: 3.4rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 31.6vw;
    margin-right: 6.4rem;
    margin-bottom: 8.9rem;
  }
`

const LogoContainer = styled.div`
  margin-top: 1.3rem;
  display: flex;

  &.animate {
    opacity: 0;
    ${fadeIn}
    ${raiseIn}
    -webkit-animation: fadeIn 0.7s ease-in 1.2s forwards,
      raiseIn 0.7s ease-in 1.2s forwards;
    animation: fadeIn 0.7s ease-in 1.2s forwards,
      raiseIn 0.7s ease-in 1.2s forwards;
  }
`

const Logo = styled.div`
  height: 65px;
  width: 34%;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

const Tarion = styled(Logo)`
  width: 18%;
  margin-right: 1.5rem;
`

const ImgOneContainer = styled.div`
  width: 13.65vw;
  height: 38.2vh;
  margin-right: 0.8rem;
  display: inline-block;

  background-image: url(${ImgOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 17% 50%;

  @media screen and (max-width: 640px) {
    width: 73vw;
    height: 28.8vh;
    margin-right: 0;
    margin-bottom: 1rem;

    float: right;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 41.6vw;
    height: 54vh;
    max-height: 411px;
    margin: 0;

    position: absolute;
    top: 15.7%;
    left: 50vw;

    background-position: 44% 50%;
  }

  &.animate {
    opacity: 0;
    ${fadeIn}
    -webkit-animation: fadeIn 0.7s ease-in 1.1s forwards;
    animation: fadeIn 0.7s ease-in 1.1s forwards;
  }
`

const ImgTwoContainer = styled.div`
  width: 43vw;
  height: 85.7vh;

  position: relative;

  background-image: url(${ImgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 640px) {
    clear: both;
    width: 100%;
    height: 36.7vh;

    background-position: 50% 80%;
  }

  @media screen and (min-width: 641px) and (max-width: 768px) {
    width: 90vw;
    height: 72.9vh;

    background-position: 50% 76.5%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 92.4vw;
    height: 72.9vh;

    background-position: 50% 76.5%;
  }

  &.animate {
    opacity: 0;
    ${fadeIn}
    -webkit-animation: fadeIn 0.7s ease-in 1.3s forwards;
    animation: fadeIn 0.7s ease-in 1.3s forwards;
  }
`

const Disclaimer = styled.p`
  margin: 0;
  position: absolute;
  top: 100.3%;

  font-style: italic;
  font-size: 12px;
`

const StorySection = ({
  heading,
  thirdHeading,
  fourthHeading,
  description,
}) => {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <StyledSection ref={ref}>
      <TextContainer className={inView ? "animate" : null}>
        <h3>{thirdHeading}</h3>
        <h1>{heading}</h1>
        <GoldDivider
          className={inView ? "animate-divider" : null}
        ></GoldDivider>
        <h4>{fourthHeading}</h4>
        <p>
          Our Mid Century Moderns at Mayfield project brings our passion to the
          table and expresses how we feel homes should be built.
          <br></br>
          <br></br>
          Thoughtful design, energy-efficient construction, and designer
          selected finishes all culminate in a home that will offer the highest
          level of comfort and style.
        </p>
        <LogoContainer className={inView ? "animate" : null}>
          <Tarion src={TarionLogo}></Tarion>
          <Logo src={NetZeroReadyLogo}></Logo>
        </LogoContainer>
      </TextContainer>
      <ImgOneContainer className={inView ? "animate" : null}></ImgOneContainer>
      <ImgTwoContainer className={inView ? "animate" : null}>
        <Disclaimer>
          *these are artist renderings, site may not be specifically as depicted
        </Disclaimer>
      </ImgTwoContainer>
    </StyledSection>
  )
}
export default StorySection
