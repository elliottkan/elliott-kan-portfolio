import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import TechStack from "../components/sections/techstack/techstack"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer"
import Cursor from "../components/cursor/cursor";
import '../fonts/RobotoMono/RobotoMono-VariableFont_wght.ttf';
import '../fonts/SpaceGrotesk/SpaceGrotesk-VariableFont_wght.ttf';
import './style.scss'
import Hero from "../components/sections/hero/hero"

const FillerContent = () => {
    return (
      <div>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
        <h1>MASSIVE CONTENT</h1>
      </div>
    )
  }


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Cursor />
      <Navbar />
      <div className="container">
      <Hero/>
      <TechStack />
      <FillerContent />
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Elliott Kan</title>
