import React from "react"
import styled, { css } from "styled-components"

import { fadeIn } from "./animations"

const animateStyles = css`
  opacity: 0;
  ${fadeIn}
  -webkit-animation: fadeIn 0.7s ease-in 0.5s forwards;
  animation: fadeIn 0.7s ease-in 0.5s forwards;
`

const Divider = styled.div`
  width: 100px;
  height: 8px;
  background-color: #8c7144;
  margin: 73px 0;

  ${props =>
    props.className === "animate-divider" ? `${animateStyles}` : null}

  @media screen and (max-width: 640px) {
    margin: 52px 0;
    width: 68px;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    margin: 52px 0;
    width: 94px;
  }
`

const GoldDivider = ({ className }) => <Divider className={className}></Divider>

export default GoldDivider
