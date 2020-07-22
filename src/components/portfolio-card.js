import React from "react"
import {Card} from "antd"

import Image from "gatsby-image"

const PortfolioCard = ({cardTitle, imgSrcSet}) => {
  
  return (
    <Card title={cardTitle}
          cover={<Image fluid={imgSrcSet} alt="banner" />}
          />
  )

}



export default PortfolioCard