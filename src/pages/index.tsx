import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { LINKS } from "../constants"

const Landing = styled.div`
  position: relative;

  .react-logo {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
    z-index: -1;
    opacity: 0.03;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 6rem);
    margin: 20px 0;
    position: relative;
    left: 12px;
    width: max-content;
    cursor: url("/code-icon.png"), auto;

    span {
      border-radius: 5px;
      padding: 0px 15px;
      background-color: transparent;
      transition: background-color 300ms;

      &.reactjs {
        position: relative;
        left: -28px;
      }
    }

    .simple:hover {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: yellow;
    }

    .reactjs:hover {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: #2ef964;
    }
  }
  .short-desc,
  .watch-link {
    font-size: clamp(1.4rem, 3vw, 1.6rem);
  }

  .short-desc {
    max-width: 600px;
    line-height: 1.5;
    text-align: center;

    .highlight {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: yellow;
      &--not {
        background-color: color-mix(in srgb, #163239, transparent 80%);
        color: #f9902e;
      }
      &--3 {
        background-color: color-mix(in srgb, #163239, transparent 50%);
        color: #2ef964;
      }
      font-weight: 500;
      padding: 1px 5px;
      border-radius: 5px;
    }
  }

  .watch-link {
    background-color: color-mix(in srgb, #163239, transparent 80%);
    color: white;
    margin-top: 60px;
    padding: 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 300ms, color 300ms;
    border: 4px solid color-mix(in srgb, #163239, transparent 60%);

    &:hover {
      background-color: color-mix(in srgb, #3c8b9f, transparent 30%);
      color: yellow;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Landing className="container">
      <img className="react-logo" src="/react-logo.png" alt="React logo" />
      <h1>
        <span className="simple">simple</span>
        <span className="reactjs">reactjs</span>
      </h1>
      <p className="short-desc">
        Not just about{" "}
        <span className="highlight highlight--not">
          building applications with React
        </span>
        , but also{" "}
        <span className="highlight">understanding the fundamentals</span> and{" "}
        <span className="highlight">internal workings of React</span>, and
        learning <span className="highlight">best practices</span>
        {/* <a href="https://youtube.com/@deeecode">deeecode</a> */}
        <br />
        <br />
        This course is{" "}
        <span className="highlight highlight--3">React Made Simple</span>
      </p>
      <a className="watch-link" href={LINKS.playlist}>
        Watch on YouTube
      </a>
      {/* <p>More info coming soon...</p> */}
    </Landing>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage
