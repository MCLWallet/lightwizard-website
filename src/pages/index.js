import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div dangerouslySetInnerHTML={{__html:`
    <video autoplay muted loop playsinline>
      <source src = "https://res.cloudinary.com/dxx5qncnr/video/upload/ac_none/v1594461411/Light%20Wizard/lightwizard-demo.mp4" type="video/mp4"/>
      <source src = "https://res.cloudinary.com/dxx5qncnr/video/upload/ac_none/v1594461411/Light%20Wizard/lightwizard-demo.ogv" type="video/ogg" />
      <source src = "https://res.cloudinary.com/dxx5qncnr/video/upload/ac_none/v1594461411/Light%20Wizard/lightwizard-demo.webm" type="video/webm"/>
    </video>
    `}}></div>
    


  </Layout>
)

export default IndexPage
