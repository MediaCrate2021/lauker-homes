import React from "react"
import styled from "styled-components"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import imgOne from "../images/gallery/front1.webp"
import imgTwo from "../images/gallery/front10.webp"
import imgThree from "../images/gallery/front7.webp"
import imgFour from "../images/gallery/fronts10.webp"
import imgFive from "../images/gallery/fronts11.webp"
import imgSix from "../images/gallery/backs2.webp"
import imgSeven from "../images/gallery/kitchen5.webp"
import imgEight from "../images/gallery/kitchen4.webp"
import imgNine from "../images/gallery/greatroom1.webp"
import imgTen from "../images/gallery/greatroom2.webp"
import imgEleven from "../images/gallery/greatroom3.webp"
import imgTwelve from "../images/gallery/master1.webp"
import imgThirteen from "../images/gallery/master2.webp"
import imgFourteen from "../images/gallery/master3.webp"
import imgFifteen from "../images/gallery/master-closet.webp"
import imgSixteen from "../images/gallery/bathroom1.webp"
import imgSeventeen from "../images/gallery/bathroom2.webp"
import imgEighteen from "../images/gallery/bathroom3.webp"

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SliderContainer = styled.div`
  width: 50vw;

  position: relative;

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 90vw;
  }
`

const Disclaimer = styled.p`
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: 3%;

  font-style: italic;
  font-size: 12px;
  text-align: center;
`

const GalleryCarousel = () => (
  <Section>
    <SliderContainer>
      <Carousel
        dynamicHeight={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
      >
        {/* only plain div wrappers work */}
        <div>
          <img src={imgOne}></img>
        </div>
        <div>
          <img src={imgTwo}></img>
        </div>
        <div>
          <img src={imgOne}></img>
        </div>
        <div>
          <img src={imgTwo}></img>
        </div>
        <div>
          <img src={imgThree}></img>
        </div>
        <div>
          <img src={imgFour}></img>
        </div>
        <div>
          <img src={imgFive}></img>
        </div>
        <div>
          <img src={imgSix}></img>
        </div>
        <div>
          <img src={imgSeven}></img>
        </div>
        <div>
          <img src={imgEight}></img>
        </div>
        <div>
          <img src={imgNine}></img>
        </div>
        <div>
          <img src={imgTen}></img>
        </div>
        <div>
          <img src={imgEleven}></img>
        </div>
        <div>
          <img src={imgTwelve}></img>
        </div>
        <div>
          <img src={imgThirteen}></img>
        </div>
        <div>
          <img src={imgFourteen}></img>
        </div>
        <div>
          <img src={imgFifteen}></img>
        </div>
        <div>
          <img src={imgSixteen}></img>
        </div>
        <div>
          <img src={imgSeventeen}></img>
        </div>
        <div>
          <img src={imgEighteen}></img>
        </div>
      </Carousel>
      <Disclaimer>
        *these are artist renderings, site may not be specifically as depicted
      </Disclaimer>
    </SliderContainer>
  </Section>
)

export default GalleryCarousel
