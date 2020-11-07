import React from "react"

import { Link } from "gatsby"

import classNames from 'classNames'
import headerStyles from "./header.module.scss"

const Header = (props) => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navListItemContainer}>
            <Link className={classNames(props.theme === "dark" ? "dark" : "light", headerStyles.navItem)} activeClassName={headerStyles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li className={headerStyles.navListItemContainer}>
            <Link className={classNames(props.theme === "dark" ? "dark" : "light", headerStyles.navItem)} activeClassName={headerStyles.activeNavItem} to="/projects">
              Projects
            </Link>
          </li>
          <li className={headerStyles.navListItemContainer}>
            <Link className={classNames(props.theme === "dark" ? "dark" : "light", headerStyles.navItem)} activeClassName={headerStyles.activeNavItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
