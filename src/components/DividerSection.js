import React from "react"
import styled from "styled-components"
import DividerImg from "../images/house-outline-leather.webp"

const StyledSection = styled.section`
  height: 63vh;

  background-image: url(${DividerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  // breakpoint at 768px due to image looking too small
  @media screen and (max-width: 768px) {
    background-size: 175%;
    background-repeat: repeat;
    height: 54.3vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-size: 100%;
    background-repeat: repeat;
  }
`

const DividerSection = () => <StyledSection></StyledSection>

export default DividerSection
