import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import PortfolioCard from "../components/portfolio-card"

const KfpPlexi = ( ) => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allCloudinaryMedia(filter: {tags: {eq: "kfp_plexi_thumbnail"}}) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const thumbnailImages = data.allCloudinaryMedia.edges
  
  return (
    <PortfolioCard cardTitle="Kultur For President" imgSrc={thumbnailImages[0].node.secure_url}/>
  )

}



export default KfpPlexi