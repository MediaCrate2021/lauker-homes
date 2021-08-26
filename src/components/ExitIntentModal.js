import React from "react"
import styled from "styled-components"

import Button from "./Button"
import GoldDivider from "./GoldDivider"
import LaukerLogo from "../images/lauker-logo-full.inline.svg"

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(60%) scale(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: translateY(0) scale(1);
  }
`

const Modal = styled.div`
  position: relative;

  width: 50vw;
  padding: 6vw;
  padding-top: 7vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #221e1f;

  @media screen and (max-width: 640px) {
    width: 80vw;
    padding: 3rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 65vw;
  }
`

const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-family: futura-pt;
  font-weight: 500;

  color: #ecede6;
`

const TextContainer = styled.div`
  width: 52%;

  color: #ecede6;

  > h3 {
    margin-bottom: 1rem;
  }

  > p {
    font-size: 20px;
    line-height: 1.2rem;
    width: 90%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;

    > p {
      font-size: 16px;
      margin-bottom: -2rem;
    }

    > h3 {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    > h3 {
      margin-bottom: 0;
    }
  }
`

const LogoContainer = styled.div`
  width: 40%;
  margin-top: -4rem;
  display: block;

  @media screen and (max-width: 640px) {
    display: none;
  }
`

const ExitIntentModal = ({ className }) => {
  return (
    <ModalBackground className={className}>
      <Modal>
        <CloseButton className="close-exit-intent-modal">
          <span className="close-exit-intent-modal">X</span>
        </CloseButton>
        <TextContainer>
          <h3>Just a second</h3>
          <h2>Before you go</h2>
          <GoldDivider></GoldDivider>
          <p>
            We have future projects, if you'd like to be notified of new builds
            and projects, please leave your information below.
          </p>
          <a href="#contact" className="close-exit-intent-modal">
            <Button text="Contact" className="close-exit-intent-modal"></Button>
          </a>
        </TextContainer>
        <LogoContainer>
          <LaukerLogo></LaukerLogo>
        </LogoContainer>
      </Modal>
    </ModalBackground>
  )
}

export default ExitIntentModal
