import PropTypes from "prop-types"
import React from "react"

import style from "./header.module.scss"

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
