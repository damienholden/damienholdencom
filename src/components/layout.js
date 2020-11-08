import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const theme = !props.theme ? "dark" : props.theme
  return (
    <section
      className={`content-container ${layoutStyles.container}`}
    >
      <div className={layoutStyles.content}>
        <Header theme={theme} />
        {props.children}
      </div>
      <Footer theme={theme} />
    </section>
  )
}

export default Layout
