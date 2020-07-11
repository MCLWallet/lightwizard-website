import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./header.module.scss"
import Logo from "../images/lightwizard-logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={style.greetings}>
      <div className={style.siteName}>{siteTitle}</div>
      <span> vienna based light installation artists </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
