import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

import style from "./footer.module.scss"

export default function Footer() {
  
  return (
    <footer>
      <ul>
        <li>
          <Link to="/" activeClassName="active">home</Link>
        </li>
        <li>
          <Link to="/portfolio" activeClassName="active" > portfolio </Link>
        </li>
        <li>
          <Link to = "/about" activeClassName="active"> about </Link>
        </li>
        <li>
          <Link to = "/contact" activeClassName="active"> contact </Link>
        </li>
      </ul>
    </footer>
  )
}