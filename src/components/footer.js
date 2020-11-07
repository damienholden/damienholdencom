import React from "react"
import { Link } from "gatsby"

import Icon from "../components/icon";
import footerStyles from "./footer.module.scss"

const Footer = (props) =>  {
  return (
    <footer>
      <div className={footerStyles.social}>
      <Link href="https://www.linkedin.com/in/damienholden/" target="_blank">
        <Icon icon="linkedin" color={props.theme} />
      </Link>
      <Link href="https://github.com/damienholden" target="_blank">
        <Icon icon="github" color={props.theme} />
      </Link>
      </div>
    </footer>
  )
}

export default Footer