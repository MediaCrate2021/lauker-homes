import React from "react"
import styled, { css } from "styled-components"

import { fadeIn, raiseIn } from "./animations"

const animateStyles = css`
  opacity: 0;
  ${fadeIn}
  ${raiseIn}
-webkit-animation: fadeIn 0.7s ease-in 1s forwards,
  raiseIn 0.7s ease-in 1s forwards;
  animation: fadeIn 0.7s ease-in 1s forwards, raiseIn 0.7s ease-in 1s forwards;
`

const GoldButton = styled.button`
  width: 122px;
  height: 100%;
  border: 1px solid #8c7144;
  cursor: pointer;
  background-color: #8c7144;
  margin-top: 73px;

  padding: 0.56rem;

  position: relative;
  top: 0;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;

  & > span {
    color: #221e1f;
    font-family: din-2014, sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.88px;
  }

  &:hover {
    top: -4px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
  }

  ${props => (props.className === "animate-button" ? `${animateStyles}` : null)}
`

const Button = ({ text, className }) => (
  <GoldButton className={className}>
    <span className={className}>{text}</span>
  </GoldButton>
)

export default Button
