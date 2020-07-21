import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import {Row, Col} from "antd"

import KfpPlexi from "../portfolio-items/kfp-plexi"

const Portfolio = () => (
  <>
    <SEO title="Portfolio" />
    <Row justify="center" gutter={[16,16]}>
      <Col md={11} xs={23}>
        <KfpPlexi />
      </Col>
      <Col md={11} xs={23}>
        <KfpPlexi />
      </Col>

    </Row>
    
  </>
)

export default Portfolio
