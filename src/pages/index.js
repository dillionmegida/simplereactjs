import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="main">
      <h1>simplereactjs</h1>
      <span>
        course, by <a href="https://youtube.com/@deeecode">deeecode</a>
      </span>
      <p>More info coming soon...</p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage
