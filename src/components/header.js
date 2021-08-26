import React, { Component } from "react"
import styled from "styled-components"
import LaukerLogo from "../images/lauker-logo.inline.svg"

const HeaderNav = styled.header`
  background-color: #221e1f;
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 1;
  padding: 0 140px;
  padding-right: 19vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    padding: 0 2.2rem;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    padding: 0 80px;
    padding-right: 15vw;
  }
`

const LogoWrapper = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 30px;

  @media screen and (max-width: 1024px) {
    width: 18px;
  }
`

const LinkContainer = styled.div`
  height: 100%;
  width: 40%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: none;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 56%;
  }
`

const MobileNavButton = styled.span`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    display: inline;
    color: #ecede6;

    //DIN Extra Bold
    font-family: din-2014, sans-serif;
    font-weight: 800;
    font-style: normal;
    text-transform: uppercase;
    font-size: 8px;
    letter-spacing: 0.64px;

    &.close {
      font-size: 30px;
      font-family: futura-pt;
    }
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #221e1f;

  transform: translateX(105%);
  transition: transform 0.4s ease;

  ${({ show }) =>
    show &&
    `
    @media screen and (max-width: 640px) {
    
      transform: translateX(0);
      transition: transform 0.4s ease;
    }
  `};
`

const CloseButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  height: 25vh;
`

const Link = styled.a`
  text-decoration: none;
  color: #ecede6;

  //DIN Extra Bold
  font-family: din-2014, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 11px;
  letter-spacing: 0.88px;
  text-transform: uppercase;

  &:visited {
    color: #ecede6;
  }

  @media screen and (max-width: 1024px) {
    font-size: 8px;
    letter-spacing: 0.64px;
  }

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMobileNav: false,
    }
  }

  toggleNav = () => {
    this.setState(({ showMobileNav }) => ({
      showMobileNav: !showMobileNav,
    }))
  }

  render() {
    return (
      <HeaderNav>
        <LogoWrapper>
          <a href="#top">
            <LogoContainer>
              <LaukerLogo></LaukerLogo>
            </LogoContainer>
          </a>
        </LogoWrapper>

        <LinkContainer>
          <Link href="#story">Story</Link>
          <Link href="#location">Location</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#function">Function</Link>
          <Link href="#contact">Contact</Link>
        </LinkContainer>

        <MobileNavButton onClick={this.toggleNav}>Menu</MobileNavButton>

        <MobileMenu show={this.state.showMobileNav}>
          <CloseButton>
            <MobileNavButton onClick={this.toggleNav} className="close">
              X
            </MobileNavButton>
          </CloseButton>
          <MobileLinkContainer>
            <Link href="#story" onClick={this.toggleNav}>
              Story
            </Link>
            <Link href="#location" onClick={this.toggleNav}>
              Location
            </Link>
            <Link href="#experience" onClick={this.toggleNav}>
              Experience
            </Link>
            <Link href="#function" onClick={this.toggleNav}>
              Function
            </Link>
            <Link href="#contact" onClick={this.toggleNav}>
              Contact
            </Link>
          </MobileLinkContainer>
        </MobileMenu>
      </HeaderNav>
    )
  }
}

export default Header
