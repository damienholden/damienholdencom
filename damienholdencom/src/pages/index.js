import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout theme="light">
      <Head title="Home" />
      <section className={indexStyles.container}>
        <h1>Hello,</h1>
        <h2>I'm Damien and I'm a software engineer based in Dublin, Ireland.</h2>
        <p>
          Here are some of my <Link className={indexStyles.link}  to="/projects">projects</Link>
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
