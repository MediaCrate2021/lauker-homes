import React from "react"
import styled from "styled-components"
import LaukerLogo from "../images/lauker-logo.inline.svg"
import TarionLogo from "../images/tarion-logo.inline.svg"

const FooterSection = styled.section`
  height: 295px;
  padding: 0 140px;
  color: #ecede6;
  background-color: #221e1f;

  display: flex;

  @media screen and (max-width: 640px) {
    justify-content: space-between;
    padding: 4rem 2.2rem;
    height: 100%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    padding: 0 80px;
    justify-content: space-between;
  }
`

const LogoContainer = styled.div`
  width: 55.7px;

  @media screen and (max-width: 640px) {
    width: 66.7px;
  }
`

const MobileSectionContainer = styled.div`
  display: none;

  @media screen and (max-width: 640px) {
    width: 40vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: none;
  }
`

const Section = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  //DIN Extra Bold
  font-family: din-2014, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 11px;
  letter-spacing: 0.88px;
  text-transform: uppercase;

  @media screen and (max-width: 640px) {
    width: 40vw;
    justify-content: flex-start;
    font-size: 8px;
    letter-spacing: 0.64px;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 20%;
  }
`

const LogoSection = styled(Section)`
  width: 55.7px;
  margin-right: 11vw;

  @media screen and (max-width: 640px) {
    margin: 0;
    width: 66.7px;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  display: block;
  color: #ecede6;

  &:visited {
    color: #ecede6;
  }
`

const TarionSection = styled(Section)`
  width: 55.7px;
  margin-left: 11vw;

  @media screen and (max-width: 640px) {
    margin: 0;
    width: 40px;
  }
`

const TarionContainer = styled.div`
  width: 55.7px;
`

const Footer = () => (
  <FooterSection>
    <LogoSection>
      <LogoContainer>
        <LaukerLogo></LaukerLogo>
      </LogoContainer>
    </LogoSection>

    <SectionContainer>
      <Section>
        780 Garden St.<br></br>Whitby, Ontario.
      </Section>
      <Section>
        <div>
          <SocialLink
            href="https://www.instagram.com/laukerhomes/"
            target="_blank"
          >
            Instagram
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/laukerhomes"
            target="_blank"
          >
            Facebook
          </SocialLink>
        </div>
      </Section>
      <Section>
        © 2020 Lauker Homes<br></br>All rights reserved.
      </Section>
      <TarionSection>
        <TarionContainer>
          <TarionLogo></TarionLogo>
        </TarionContainer>
      </TarionSection>
    </SectionContainer>

    <MobileSectionContainer>
      <Section>
        780 Garden St.<br></br>Whitby, Ontario.
      </Section>
      <Section>
        <div>
          <SocialLink
            href="https://www.instagram.com/laukerhomes/"
            target="_blank"
          >
            Instagram
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/laukerhomes"
            target="_blank"
          >
            Facebook
          </SocialLink>
        </div>
      </Section>
      <Section>
        © 2020 Lauker Homes<br></br>All rights reserved.
      </Section>
      <TarionSection>
        <TarionContainer>
          <TarionLogo></TarionLogo>
        </TarionContainer>
      </TarionSection>
    </MobileSectionContainer>
  </FooterSection>
)

export default Footer
