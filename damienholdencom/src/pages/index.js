import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi</h1>
      <h2>I'm Damien and I'm a software engineer based in Dublin, Ireland.</h2>
      <p>
        Follow me on my social media <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
