import React from "react"

import Icon from "../components/icon";
import footerStyles from "./footer.module.scss"

const Footer = (props) =>  {
  return (
    <footer>
      <div className={footerStyles.social}>
      <a href="https://www.linkedin.com/in/damienholden/" target="_blank" rel="noreferrer">
        <Icon icon="linkedin" color={props.theme} />
      </a>
      <a href="https://github.com/damienholden" target="_blank" rel="noreferrer">
        <Icon icon="github" color={props.theme} />
      </a>
      </div>
    </footer>
  )
}

export default Footer