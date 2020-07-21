import React from "react"
import {Card} from "antd"

const PortfolioCard = ({cardTitle, imgSrc}) => {
  
  return (
    <Card title={cardTitle}
          cover={<img alt="example" src={imgSrc} />}
          />
  )

}



export default PortfolioCard