import React from "react"
import styled from "styled-components"
import GoldDivider from "./GoldDivider.js"

import { useInView } from "react-intersection-observer"
import { fadeIn, textAnimationStyles } from "./animations"

import ImgOne from "../images/location-section-images/houses-front.jpg"
import ImgTwo from "../images/location-section-images/houses-back.jpg"

const StyledSection = styled.section`
  height: 100%;
  padding-left: 140px;
  padding-top: 8rem;
  padding-bottom: 15.5rem;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    display: block;

    padding: 7rem 2.2rem;
    padding-bottom: 3.5rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    display: block;

    padding: 0 80px;
    padding-top: 5.5rem;
    padding-bottom: 6rem;
  }
`

const TextContainer = styled.div`
  width: 27vw;

  &.animate {
    ${textAnimationStyles}
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 40vw;
    margin-bottom: 5rem;
  }
`

const ImgOneContainer = styled.div`
  width: 100%;
  height: 48.6%;

  background-image: url(${ImgOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 85%;

  @media screen and (max-width: 640px) {
    height: 48.5%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    background-position: 0% 72%;
  }

  @media screen and (min-width: 1921px) {
    background-position: 0% 72%;
  }
`

const ImgTwoContainer = styled.div`
  width: 100%;
  height: 48.6%;

  background-image: url(${ImgTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 55%;

  @media screen and (max-width: 640px) {
    height: 48.5%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    background-position: 0% 50%;
  }

  @media screen and (min-width: 1921px) {
    background-position: 0% 50%;
  }
`

const ImgContainer = styled.div`
  width: 55vw;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.animate {
    opacity: 0;
    ${fadeIn}
    -webkit-animation: fadeIn 0.7s ease-in 1.3s forwards;
    animation: fadeIn 0.7s ease-in 1.3s forwards;
  }

  @media screen and (max-width: 640px) {
    margin: 0;
    width: 100vw;
    margin-left: -2.2rem;
    height: 65vh;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
    height: 50vh;
  }
`

const Disclaimer = styled.p`
  margin: 0;
  position: absolute;
  top: 100.3%;

  font-style: italic;
  font-size: 12px;
`

const LocationSection = ({
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
          59-67 Waywell St., Whitby, Ontario. (
          <a
            href="https://goo.gl/maps/714yhRATAMHrguyu9"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#8c7144",
              fontWeight: "500",
            }}
          >
            view map
          </a>
          )<br></br>
          <br></br>
          {description}
          <br></br>
          <br></br>
          There are 5 homes for sale starting at $2.1 Million.
        </p>
      </TextContainer>
      <ImgContainer className={inView ? "animate" : null}>
        <ImgOneContainer></ImgOneContainer>
        <ImgTwoContainer></ImgTwoContainer>
        <Disclaimer>
          *these are artist renderings, site may not be specifically as depicted
        </Disclaimer>
      </ImgContainer>
    </StyledSection>
  )
}

export default LocationSection
