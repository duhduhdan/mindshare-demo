import React, { PropTypes } from 'react'

import './RowItem.css'

import Ball from '../Ball/Ball'
import Score from '../Score/Score'

const RowItem = ({ index, ...props }) => (
  <li className="row-item" key={index}>
    <span className="item-number">{index}</span>
    <Ball {...props} />
    <Ball {...props} />
    <Ball {...props} />
    <Ball {...props} />
    <Score />
  </li>
)

RowItem.propTypes = {
  index: PropTypes.number,
  active: PropTypes.bool,
  activeColor: PropTypes.string,
  score: PropTypes.any
}

export default RowItem
