import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import TechStack from "../components/sections/techstack/techstack"
import Footer from "../components/footer"
import './style.scss'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="container">
      <TechStack />
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
          <h1>MASSIVE CONTENT</h1>
          <h1>MASSIVE CONTENT</h1>
          <h1>MASSIVE CONTENT</h1>
          <h1>MASSIVE CONTENT</h1>
          <h1>MASSIVE CONTENT</h1>
          <h1>MASSIVE CONTENT</h1>
          <h1>MASSIVE CONTENT</h1>
      </div>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Elliott Kan</title>
