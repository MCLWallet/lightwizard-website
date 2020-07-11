import React from "react"
import PropTypes from "prop-types"

import { propTypes } from "react-bootstrap/esm/Image"

const BackgroundVideo = ({ cloudName, publicID }) => (
  <div className="videoWrapper" dangerouslySetInnerHTML={{__html:`
    <video autoplay muted loop playsinline>
      <source src = "https://res.cloudinary.com/` + cloudName + `/video/upload/ac_none/v1594461411/` + publicID + `.mp4" type="video/mp4"/>
      <source src = "https://res.cloudinary.com/` + cloudName + `/video/upload/ac_none/v1594461411/` + publicID + `.ogv" type="video/ogg" />
      <source src = "https://res.cloudinary.com/` + cloudName + `/video/upload/ac_none/v1594461411/` + publicID + `.webm" type="video/webm"/>
    </video>
    `}}></div>
)

BackgroundVideo.propTypes = {
  cloudName: PropTypes.string,
  publicID: PropTypes.string
}

BackgroundVideo.defaultProps = {
  cloudName: `dxx5qncnr`,
  publicID: `Light%20Wizard/lightwizard-demo`
}

export default BackgroundVideo