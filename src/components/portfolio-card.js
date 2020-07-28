import React from "react"
import {Card} from "antd"

import Image from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"

import portfolioCardStyles from "./portfolio-card.module.scss"
// TODO: Fix fixed height problem

const PortfolioCard = ({cardTitle, imgSrcSet}) => {
  
  return (
    <div className={portfolioCardStyles.carouselContainer}>
      <Carousel controls={false}>
        <Carousel.Item>
          <Image fluid={imgSrcSet[0].node.childCloudinaryAsset.fluid}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid={imgSrcSet[1].node.childCloudinaryAsset.fluid}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid={imgSrcSet[2].node.childCloudinaryAsset.fluid}/>
        </Carousel.Item>
      </Carousel>
      <h1>
              {cardTitle}

            </h1>
    </div>
    
  )

}



export default PortfolioCard