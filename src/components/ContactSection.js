import React from "react"
import styled from "styled-components"
import GoldDivider from "./GoldDivider.js"
import ContactForm from "./ContactForm"

import { useInView } from "react-intersection-observer"
import { fadeIn, textAnimationStyles } from "./animations"

const StyledSection = styled.section`
  height: 100%;
  padding-left: 140px;
  padding-top: 20vh;
  padding-bottom: 10vh;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    height: 100%;
    display: block;

    padding: 5rem 2.2rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    height: 93vh;

    padding: 0 80px;
    padding-top: 5.5rem;
  }
`

const TextContainer = styled.div`
  width: 29vw;

  &.animate {
    ${textAnimationStyles}
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    margin-right: 0.7rem;
  }
`

const FormContainer = styled.div`
  width: 56.5vw;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
  }

  &.animate {
    opacity: 0;
    ${fadeIn}
    -webkit-animation: fadeIn 0.7s ease-in 1.1s forwards;
    animation: fadeIn 0.7s ease-in 1.1s forwards;
  }
`

const ContactSection = ({ heading, thirdHeading }) => {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <StyledSection ref={ref}>
      <TextContainer className={inView ? "animate" : null}>
        <h3>{thirdHeading}</h3>
        <h1>{heading}</h1>
        <GoldDivider
          className={inView ? "animate-divider" : null}
        ></GoldDivider>
        <h4>
          Our Whitby showcase home is now ready for viewing by private
          appointment.
          <br></br>
          <br></br>
          Contact us for bookings or additional information.
        </h4>
      </TextContainer>
      <FormContainer className={inView ? "animate" : null}>
        <ContactForm></ContactForm>
      </FormContainer>
    </StyledSection>
  )
}

export default ContactSection
