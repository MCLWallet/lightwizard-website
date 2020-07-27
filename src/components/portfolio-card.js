import React from "react"
import {Card} from "antd"

import Image from "gatsby-image"

const PortfolioCard = ({cardTitle, imgSrcSet}) => {
  
  return (
    <a className="portfolio-card" href="#">
      <h1 style={{color: '#fff'}}>{cardTitle}</h1>
      <Image fluid={imgSrcSet}/>

    </a>
  )

}



export default PortfolioCard