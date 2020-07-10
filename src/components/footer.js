import React from "react"
import {Link} from "gatsby"

import style from "./footer.module.scss"

const Footer = () => (
  <footer>
      <ul>
        <li>
          <a href="#">facebook</a>
        </li>
        <li>
          <a href="#">instagram</a>
        </li>
        <li>
          <a href="#">pinterest</a>
        </li>
        <li>
          <a href="#">mail</a>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/" activeClassName="active">home</Link>
        </li>
        <li>
          <Link to="/page-2" activeClassName="active" > portfolio </Link>
        </li>
        <li>
          <Link to = "/page-2" activeClassName="active"> about </Link>
        </li>
        <li>
          <Link to = "/page-2" activeClassName="active"> contact </Link>
        </li>
      </ul>
  </footer>
)

export default Footer