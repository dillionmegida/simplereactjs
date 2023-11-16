import React from "react"
import styled from "styled-components"
import NewTabLink from "../components/new-tab-link"

const Section = styled.section`
  background-color: color-mix(in srgb, black, transparent 90%);
  margin-top: 80px;

  .heading {
    position: relative;
    top: -30px;
    padding: 20px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    /* border: 4px solid color-mix(in srgb, yellow, transparent 50%); */
    width: max-content;
    margin: 0 auto;
    background-color: var(--primary);
    border-radius: 10px;
    --x-deg: -5deg;
    --y-deg: 20deg;
    transform: perspective(1000px) rotateX(var(--x-deg)) rotateY(var(--y-deg));
    transform-style: preserve-3d;

    &::before {
      content: "";
      inset: 3px;
      background-color: color-mix(in srgb, black, transparent 10%);
      position: absolute;
      --scale: 1;
      transform: translateZ(-19px) scale(var(--scale));
      filter: blur(5px);
      border-radius: inherit;
      z-index: -1;
      opacity: 0.5;
    }

    &::after {
      content: "";
      inset: -10px;
      background-color: color-mix(in srgb, yellow, transparent 50%);
      position: absolute;
      z-index: -2;
      --scale: 1;
      transform: translateZ(-20px) scale(var(--scale));
      border-radius: inherit;
    }
  }

  .container {
    padding: 80px 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 50px;
    /* perspective: 1000px; */

    .lesson {
      /* border: 4px solid color-mix(in srgb, black, transparent 80%); */
      border-radius: 10px;
      transition: border-color 300ms, transform 300ms;
      position: relative;
      --x-deg: -5deg;
      --y-deg: 20deg;
      transform: perspective(1000px) rotateX(var(--x-deg)) rotateY(var(--y-deg));
      transform-style: preserve-3d;

      &:hover,
      &:focus {
        /* border: 4px solid yellow; */
        /* transform: translateY(-20px); */
        /* transform: rotateY(20deg) rotateX(20deg); */
        --x-deg: -5deg;
        --y-deg: 0deg;
        outline: none;

        &::after {
          /* transform: translateY(30px); */
          /* --scale: 1.3; */
          background-color: color-mix(in srgb, yellow, transparent 0%);
        }
        &::before {
          /* --scale: 1.1; */
          /* transform: translateZ(-30px) scale(1.1); */
        }
      }

      &::before &::after {
        transition: transform 300ms, background-color 300ms;
      }

      &::before {
        content: "";
        inset: 4px;
        background-color: color-mix(in srgb, black, transparent 10%);
        position: absolute;
        --scale: 1;
        transform: translateZ(-40px) scale(var(--scale));
        filter: blur(4px);
        border-radius: inherit;
      }

      &::after {
        content: "";
        inset: -15px;
        background-color: color-mix(in srgb, yellow, transparent 50%);
        position: absolute;
        --scale: 1;
        transform: translateZ(-40px) scale(var(--scale));
        border-radius: inherit;
      }

      /* &::after {
        content: "";
        width: 90%;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: color-mix(in srgb, black, transparent 30%);
        background-color: red; */
      /* height: 10px;
        bottom: 0;
        transition: transform 300ms;
        filter: blur(5px);
        opacity: .3;
        z-index: -1;
      } */

      &__cover {
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`

const lessons = [
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
  {
    title: "Components and JSX",
    cover: "/lessons/2-component-jsx.png",
    youtube: "https://youtu.be/QqiByoW1eik",
  },
  {
    title: "Props",
    cover: "/lessons/3-component-props.png",
    youtube: "https://youtu.be/KGDi6818H4w",
  },
  {
    title: "CSS and Styles",
    cover: "/lessons/4-component-styling.png",
    youtube: "https://youtu.be/SLbgWLI0mOI",
  },
  {
    title: "First Project",
    cover: "/lessons/5-project-1.png",
    youtube: "https://youtu.be/jjtyWInyTw8",
  },
]

export default function LessonsSection() {
  return (
    <Section>
      <h2 className="heading">LESSONS</h2>
      <div className="container">
        {lessons.map(lesson => (
          <NewTabLink
            href={lesson.youtube}
            className="lesson"
            key={lesson.title}
          >
            <img
              className="lesson__cover"
              src={lesson.cover}
              alt={lesson.title}
            />
          </NewTabLink>
        ))}
      </div>
    </Section>
  )
}
