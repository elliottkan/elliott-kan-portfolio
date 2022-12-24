import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Hero from "./hero/Hero";
import './style.scss'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <Hero/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Elliott Kan</title>
