import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './style.scss'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Elliott Kan</title>
