import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import TechStack from "../components/sections/techstack/techstack"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer"
import Cursor from "../components/cursor/cursor";
import '../fonts/RobotoMono/RobotoMono-VariableFont_wght.ttf';
import '../fonts/SpaceGrotesk/SpaceGrotesk-VariableFont_wght.ttf';
import './style.scss'
import Hero from "../components/sections/hero/hero"
import About from "../components/sections/about/about"
import Jobs from "../components/sections/jobs/jobs"
import Portfolio from "../components/sections/portfolio/portfolio"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Cursor />
      <Navbar />
      <div className="container">
      <Hero/>
      <About/>
      <TechStack />
      <Jobs />
      <Portfolio/>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Elliott Kan</title>
