import React, { PropTypes } from 'react'

import './Ball.css'

const Ball = ({ color, onClick }) => (
  <span className={`ball ${color || 'inactive'}`} onClick={onClick}>{' '}</span>
)

Ball.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Ball
