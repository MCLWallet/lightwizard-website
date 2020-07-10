import React from "react"
import {Link} from "gatsby"

import style from "./footer.module.scss"

const Footer = () => (
  <footer>
      <ul>
        <li>
          <a href="https://www.facebook.com/lightwizardvienna" target="_blank">facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/light_wizard_vienna/" target="_blank">instagram</a>
        </li>
        {/* TODO: Pinterest public board? */}
        <li>
          <a href="#">pinterest</a>
        </li>
        {/* TODO: get new domain */}
        <li>
          <a href="#">mail</a>
        </li>
      </ul>
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

export default Footer