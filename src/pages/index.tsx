import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import TechStack from "../components/sections/techstack/techstack"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer"
import '../fonts/RobotoMono/RobotoMono-VariableFont_wght.ttf';
import '../fonts/SpaceGrotesk/SpaceGrotesk-VariableFont_wght.ttf';
import './style.scss'
import Hero from "../components/sections/hero/hero"
import About from "../components/sections/about/about"
import Jobs from "../components/sections/jobs/jobs"
import Portfolio from "../components/sections/portfolio/portfolio"
import Contact from "../components/sections/contact/contact"
import Container from "../components/shared/container"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Container key="">
        <Hero/>
        <About/>
        <TechStack />
        <Jobs />
        <Portfolio/>
        <Contact/>
      </Container>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
  <html lang="en"/>
  <title>Elliott Kan Portfolio</title>
  <meta name="description" content="Elliott Kan Portfolio" />
</>
)
