import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

import style from "./footer.module.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query IconQuery {
      allIcons {
        edges {
          node {
            facebook {
              css
              standard
              markup
            }
            instagram {
              css
              standard
              markup
            }
            mail {
              css
              standard
              markup
            }
          }
        }
      }
    }
  `)

  return (
    <footer>
      <ul style={{paddingLeft: `1em`}}>
        <li>
          <a href="https://www.facebook.com/lightwizardvienna" 
            target="_blank"
            dangerouslySetInnerHTML={{__html: data.allIcons.edges[0].node.facebook[0].markup}}>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/light_wizard_vienna/" 
            target="_blank"
            dangerouslySetInnerHTML={{__html: data.allIcons.edges[0].node.instagram[0].markup}}></a>
        </li>
        {/* TODO: get new domain */}
        <li>
          <a href="#"
          dangerouslySetInnerHTML={{__html: data.allIcons.edges[0].node.mail[0].markup}}></a>
        </li>
      </ul>
      <ul style={{paddingRight:`1em`, textAlign: `right`}}>
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
      <style dangerouslySetInnerHTML={{__html: data.allIcons.edges[0].node.facebook[0].css}}/>
      <style dangerouslySetInnerHTML={{__html: data.allIcons.edges[0].node.instagram[0].css}}/>
      <style dangerouslySetInnerHTML={{__html: data.allIcons.edges[0].node.mail[0].css}}/>
    </footer>
  )
}