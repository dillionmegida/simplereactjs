import React from "react"
import styled from "styled-components"
import NewTabLink from "../components/new-tab-link"
import YouTube from "../components/Icon/YouTube"

const Section = styled.section`
  /* background-color: color-mix(in srgb, black, transparent 90%); */

  .heading {
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    background-color: white;
    padding: 20px 30px;
    color: black;
  }

  .lesson {
    text-align: left;

    &__section {
      width: 100%;

      &-label {
        width: 100%;
        text-align: left;
        display: block;
        padding: 15px 30px;
        color: white;
        background-color: color-mix(in srgb, white, transparent 95%);
        text-transform: uppercase;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      line-height: 1.3;
      gap: 15px;
      background-color: color-mix(in srgb, black, transparent 50%);
      font-size: 1.2rem;
      width: 100%;
      padding: 30px;
      color: white;
      transition: color 300ms, background-color 300ms;

      &:hover,
      &:focus {
        background-color: var(--primary);
        color: yellow;
        text-decoration: none;
        box-shadow: 1px 1px 20px color-mix(in srgb, black, transparent 80%);
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid color-mix(in srgb, var(--primary), white 30%);
    }
  }
`

const lessons = [
  {
    label: "Introduction",
    lessons: [
      {
        title: "Introduction to the course",
        cover: "/lessons/0-react-intro.png",
        youtube: "https://youtu.be/iqYK2UgNv-w",
      },
      {
        title: "Setting up React environment with Vite",
        cover: "/lessons/1-vite-react.png",
        youtube: "https://youtu.be/iUdJTMGC6aI",
      },
    ],
  },
  {
    label: "Components, Props, JSX, Styles",
    lessons: [
      {
        title: "Understanding Components and JSX",
        cover: "/lessons/2-component-jsx.png",
        youtube: "https://youtu.be/QqiByoW1eik",
      },
      {
        title: "Props - A Detailed Explanation",
        cover: "/lessons/3-component-props.png",
        youtube: "https://youtu.be/KGDi6818H4w",
      },
      {
        title: "CSS and Styles - An Introduction",
        cover: "/lessons/4-component-styling.png",
        youtube: "https://youtu.be/SLbgWLI0mOI",
      },
      {
        title: "Pricing Card Component Project",
        cover: "/lessons/5-project-1.png",
        youtube: "https://youtu.be/jjtyWInyTw8",
      },
    ],
  },
  {
    label: "Composition, Lists",
    lessons: [
      {
        title: "Rendering Lists in Components",
        cover: "/lessons/6-rendering-lists.png",
        youtube: "https://youtu.be/40aGM_Cz5h8",
      },
    ],
  },
]

export default function LessonsSection() {
  return (
    <Section>
      <div className="container">
        <h2 className="heading">Course Outline</h2>
        {lessons.map(lesson => (
          <div className="lesson__section">
            <span className="lesson__section-label">{lesson.label}</span>
            {lesson.lessons.map(lesson => (
              <ul className="lessons">
                <li key={lesson.title} className="lesson">
                  <NewTabLink href={lesson.youtube} className="lesson__link">
                    {/* <img
              className="lesson__cover"
              src={lesson.cover}
              alt={lesson.title}
            /> */}
                    <YouTube color="white" size={30} />
                    {lesson.title}
                  </NewTabLink>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
