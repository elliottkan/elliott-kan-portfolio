import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import TechStack from "../components/sections/techstack/techstack"
import Header from "../components/header"
import Footer from "../components/footer"
import Cursor from "../components/cursor/cursor";
import '../fonts/RobotoMono/RobotoMono-VariableFont_wght.ttf';
import '../fonts/SpaceGrotesk/SpaceGrotesk-VariableFont_wght.ttf';
import './style.scss'

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
      <Header />
      <div className="container">
      <TechStack />
      <FillerContent />
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Elliott Kan</title>
