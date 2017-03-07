import React, { PropTypes } from 'react'

import './RowItem.css'

import Score from '../Score/Score'
import RowItemBall from '../RowItemBalls/RowItemBall'

const RowItem = ({ index, activeColor }) => (
  <li className="row-item" key={index}>
    <span className="item-number">{index}</span>
    <RowItemBall rowIndex={index} />
    <RowItemBall rowIndex={index} />
    <RowItemBall rowIndex={index} />
    <RowItemBall rowIndex={index} />
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
