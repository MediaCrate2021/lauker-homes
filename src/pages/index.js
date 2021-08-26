import React from "react"

import { document } from "browser-monads"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CookieService from "../services/CookieService"
import ExitIntentModal from "../components/ExitIntentModal"

import HeroSection from "../components/HeroSection"
import StorySection from "../components/StorySection"
import LocationSection from "../components/LocationSection"
import DividerSection from "../components/DividerSection"
import ExperienceSection from "../components/ExperienceSection"
import FunctionSection from "../components/FunctionSection"
import ContactSection from "../components/ContactSection"

const mouseEvent = e => {
  const shouldShowExitIntent =
    !e.toElement && !e.relatedTarget && e.clientY < 10

  if (shouldShowExitIntent) {
    document.removeEventListener("mouseout", mouseEvent)

    document.querySelector(".exit-intent-modal").classList.add("visible")

    CookieService.setCookie("exitIntentShown", true, 30)
  }
}

const exit = e => {
  const shouldExit =
    [...e.target.classList].includes("exit-intent-modal") ||
    e.target.className === "close-exit-intent-modal" ||
    e.keyCode === 27

  if (shouldExit) {
    document.querySelector(".exit-intent-modal").classList.remove("visible")
  }
}

if (!CookieService.getCookie("exitIntentShown")) {
  setTimeout(() => {
    document.addEventListener("mouseout", mouseEvent)
    document.addEventListener("keydown", exit)
    document.querySelector(".exit-intent-modal").addEventListener("click", exit)
  }, 20_000)
}

const IndexPage = () => (
  <Layout>
    <SEO title="Lauker Homes" />

    <ExitIntentModal className="exit-intent-modal"></ExitIntentModal>

    <div id="top">
      <HeroSection
        heading="Lauker Homes."
        thirdHeading="Welcome to"
        fourthHeading="High-performance, future-forward homes."
      ></HeroSection>
    </div>

    <div id="story">
      <StorySection
        heading="Story."
        thirdHeading="About Lauker Homes"
        fourthHeading="Lauker was formed on the idea that new homes should be different… better."
      ></StorySection>
    </div>

    <div id="location">
      <LocationSection
        heading="Location"
        thirdHeading="The Place"
        fourthHeading="Modern, contemporary homes distinctly rooted in history."
        description="Well-appointed properties on the former grounds of heritage-designated Mayfield House (circa 1845). Lots are in close proximity to schools, parks, golf courses, tennis courts and Whitby’s amenity-rich historic downtown. Small town charm with big city sophistication."
      ></LocationSection>
    </div>

    <DividerSection></DividerSection>

    <div id="experience">
      <ExperienceSection
        heading="Experience."
        thirdHeading="Model Homes"
        fourthHeading="Thoughtfully constructed, striking homes."
        description="Live. Work. Entertain. Our homes reflect a sophisticated simplicity that is contemporary and timeless — functional luxury at its best. Move-in ready with bespoke quality, a Lauker Home is the perfect backdrop for your lifestyle, now and in the future."
      ></ExperienceSection>
    </div>

    <div id="function">
      <FunctionSection
        heading="Function."
        thirdHeading="Features and Finishes"
        fourthHeading="Forward-thinking design with meticulous attention to detail, comfort and feel, from everything you see to everything you don’t."
      ></FunctionSection>
    </div>

    <div id="contact">
      <ContactSection
        heading="Contact."
        thirdHeading="Get in Touch"
      ></ContactSection>
    </div>
  </Layout>
)

export default IndexPage
