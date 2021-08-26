import React, { Component } from "react"
import styled from "styled-components"
import GoldDivider from "./GoldDivider.js"
import ImgOne from "../images/experience-section-images/bathroom-1.webp"
import ImgTwo from "../images/experience-section-images/kitchen-4.webp"
import ImgThree from "../images/experience-section-images/master-bedroom-2.webp"
import ImgFour from "../images/experience-section-images/master-closet-1.webp"

import GalleryCarousel from "./GalleryCarousel"

import { useInView } from "react-intersection-observer"
import { fadeIn, raiseIn, zoomIn, textAnimationStyles } from "./animations"

const StyledSection = styled.section`
  height: 100vh;
  padding-left: 140px;
  padding-top: 29vh;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    height: 100%;
    display: block;
    overflow: hidden;

    padding: 7rem 2.2rem;
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    height: 100%;
    display: block;

    padding: 0 80px;
    padding-top: 5.5rem;
    padding-bottom: 6rem;
  }
`

const TextContainer = styled.div`
  width: 28vw;

  ${textAnimationStyles}

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 50vw;
    margin-bottom: 5.7rem;
  }
`

const ImgContainer = styled.div`
  cursor: pointer;
  width: 56.5vw;
  height: 48vh;
  margin-top: 1.4rem;

  position: relative;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    margin: 0;
    width: 850px;
    height: 76vh;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
    height: 67vh;
  }
`

const Img = styled.div`
  width: 24.2%;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 640px) {
    overflow: hidden;
    width: 23.5%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 23.8%;
  }
`

const FirstImg = styled(Img)`
  background-image: url(${ImgOne});
  background-position: 17% 50%;

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    background-position: 20% 50%;
  }

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 0.7s ease-in 1s forwards,
    raiseIn 0.7s ease-in 1s forwards;
  animation: fadeIn 0.7s ease-in 1s forwards, raiseIn 0.7s ease-in 1s forwards;
`

const SecondImg = styled(Img)`
  background-image: url(${ImgTwo});
  background-position: 80% 50%;

  @media screen and (max-width: 640px) {
    background-position: 77% 50%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    background-position: 77% 50%;
  }

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 0.7s ease-in 1.2s forwards,
    raiseIn 0.7s ease-in 1.2s forwards;
  animation: fadeIn 0.7s ease-in 1.2s forwards,
    raiseIn 0.7s ease-in 1.2s forwards;
`

const ThirdImg = styled(Img)`
  background-image: url(${ImgThree});
  background-position: 80% 50%;

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    background-position: 78% 50%;
  }

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 0.7s ease-in 1.4s forwards,
    raiseIn 0.7s ease-in 1.4s forwards;
  animation: fadeIn 0.7s ease-in 1.4s forwards,
    raiseIn 0.7s ease-in 1.4s forwards;
`

const FourthImg = styled(Img)`
  background-image: url(${ImgFour});
  background-position: 40% 50%;

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    background-position: 46% 50%;
  }

  opacity: 0;
  ${fadeIn}
  ${raiseIn}
  -webkit-animation: fadeIn 0.7s ease-in 1.6s forwards,
    raiseIn 0.7s ease-in 1.6s forwards;
  animation: fadeIn 0.7s ease-in 1.6s forwards,
    raiseIn 0.7s ease-in 1.6s forwards;
`

const GalleryContainer = styled.div`
  display: none;

  ${({ show }) =>
    show &&
    `
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(8px);

    opacity: 0;
    ${fadeIn}
    -webkit-animation: fadeIn 0.15s ease-in 0.15s forwards;
    animation: fadeIn 0.15s ease-in 0.15s forwards;
  `};
`

const GalleryExitButton = styled.div`
  cursor: pointer;
  color: #ecede6;

  font-size: 30px;
  font-family: futura-pt;
  font-weight: 800;

  position: absolute;
  top: 0;
  right: 0;

  padding: 1rem;

  display: flex;
  align-items; center;
  justify-content: center;
}
`

const Disclaimer = styled.p`
  margin: 0;
  position: absolute;
  top: 100.3%;

  font-style: italic;
  font-size: 12px;
`

// const ExperienceSection = ({ heading, thirdHeading, fourthHeading }) => {
//   const [ref, inView] = useInView({ threshold: 0.15 })

//   return (
//     <StyledSection ref={ref}>
//       <TextContainer className={inView ? "animate" : null}>
//         <h3>{thirdHeading}</h3>
//         <h1>{heading}</h1>
//         <GoldDivider
//           className={inView ? "animate-divider" : null}
//         ></GoldDivider>
//         <h4>{fourthHeading}</h4>
//       </TextContainer>
//       <ImgContainer>
//         <FirstImg className={inView ? "animate" : null}></FirstImg>
//         <SecondImg className={inView ? "animate" : null}></SecondImg>
//         <ThirdImg className={inView ? "animate" : null}></ThirdImg>
//         <FourthImg className={inView ? "animate" : null}></FourthImg>
//       </ImgContainer>

//       <GalleryCarousel></GalleryCarousel>
//     </StyledSection>
//   )
// }

class ExperienceSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showGallery: false,
    }
  }

  toggleGallery = () => {
    this.setState(({ showGallery }) => ({
      showGallery: !showGallery,
    }))
  }

  render() {
    const { heading, thirdHeading, fourthHeading, description } = this.props
    return (
      <StyledSection>
        <TextContainer>
          <h3>{thirdHeading}</h3>
          <h1>{heading}</h1>
          <GoldDivider className="animate-divider"></GoldDivider>
          <h4>{fourthHeading}</h4>
          <p>{description}</p>
        </TextContainer>

        <ImgContainer onClick={this.toggleGallery}>
          <FirstImg></FirstImg>
          <SecondImg></SecondImg>
          <ThirdImg></ThirdImg>
          <FourthImg></FourthImg>
          <Disclaimer>
            *these are artist renderings, site may not be specifically as
            depicted
          </Disclaimer>
        </ImgContainer>

        <GalleryContainer show={this.state.showGallery}>
          <GalleryCarousel></GalleryCarousel>
          <GalleryExitButton onClick={this.toggleGallery}>
            <span>X</span>
          </GalleryExitButton>
          <Disclaimer>
            *these are artist renderings, site may not be specifically as
            depicted
          </Disclaimer>
        </GalleryContainer>
      </StyledSection>
    )
  }
}

export default ExperienceSection
