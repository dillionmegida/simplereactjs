import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import LessonsSection from "../components/lessons-section"
import ReactConcepts from "../components/react-concepts"
import styled from "styled-components"

const FreeText = styled.div`
  padding: 80px 0 100px;
  font-size: 10rem;
  color: white;
  opacity: 0.4;
  font-weight: 900;
  letter-spacing: -2px;
  transform: scaleY(0.8);
`

const IndexPage = () => (
  <Layout>
    <Landing />
    <FreeText>
      <span className="for-free-text">FOR FREE</span>
    </FreeText>
    <LessonsSection />
    <ReactConcepts />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage
