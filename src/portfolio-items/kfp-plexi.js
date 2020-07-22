import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import PortfolioCard from "../components/portfolio-card"

const KfpPlexi = ( ) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {relativeDirectory: {eq: "portfolio/kfp-plexi"}}) {
        edges {
          node {
            childCloudinaryAsset {
              fluid {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges
  
  return (
    <PortfolioCard cardTitle="Kultur For President" imgSrcSet={images[0].node.childCloudinaryAsset.fluid}/>
  )

}



export default KfpPlexi