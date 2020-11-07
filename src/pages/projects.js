import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/projects.scss"
import projectStyles from "./projects.module.scss"
import indexStyles from "./index.module.scss"

import { Link } from "gatsby"

const ProjectsPage = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>Portfolio</h1>
      <p>Here are some recent projects I've worked on:</p>
      <div className="project-container">
        <h4>Home Dashboard</h4>
        <div className="project-image">
          <img src={"/dashboard.png"} alt="Dashboard" />
        </div>
        <div className="project-description">
          <p>
            This was one of my first projects in <b>React</b>. It idea came to
            me when I started using a Chrome extension called <Link
              className={indexStyles.link}
              to="https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca"
              target="_blank"
            >
              Momentum
            </Link>
            . I started using this
            extension around the time I started learning React and thought it
            would be a nice first project to build out my knowledge.
          </p>
          <div className="project-skills">
            <span className={projectStyles.projectSkill}>React</span>
            <span className={projectStyles.projectSkill}>ES6+</span>
          </div>
          <Link className={projectStyles.button} to="/projects/homedashboard" target="_blank">
            View Demo
          </Link>
        </div>
      </div>
      <hr />
      {/* <div className="project-container">
        <h4>COVID-19 Case search</h4>
        <div className="project-image">
          <Img src={"/dashboard.png"} alt="Dashboard" />
        </div>
        <div className="project-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            commodo urna lobortis dolor suscipit tempor at eu neque. Donec
            tristique erat mollis.
          </p>
          <Link className={projectStyles.button} to="/projects/covidsearch">
            View Demo
          </Link>
        </div>
      </div> */}
    </Layout>
  )
}

export default ProjectsPage
