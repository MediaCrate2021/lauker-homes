import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import GoldDivider from "../components/GoldDivider.js"

const StyledSection = styled.section`
  height: 80vh;
  padding: 0 140px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 0 36px;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    padding: 0 80px;
  }
`

const TextContainer = styled.div`
  width: 50vw;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledSection>
      <TextContainer>
        <h1>404: The page cannot be found</h1>
        <GoldDivider></GoldDivider>
        <p>
          We cannot find the page you are looking for. <br></br>
          <br></br>It might have been removed, had its name changed, or is
          temporarily unavailable.
          <br></br>
          <br></br>Please check that the Web site address is spelled correctly.
          <br></br>
          <br></br>Or go to our{" "}
          <a
            href="https://www.laukerhomes.com/"
            style={{ textDecoration: "none", color: "#8C7144" }}
          >
            home page
          </a>
          , and use the menus to navigate to a specific section.
        </p>
      </TextContainer>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
