import React from 'react'
import { connect } from 'react-redux';
import { selectActiveColor } from '../../redux/actions'

import './ControlPanel.css'

import Ball from '../Ball/Ball'
import colors from '../../data'

const ControlPanel = ({ onBallClick }) => (
  <div className="choose-colors">
    {colors.map(color =>
      <Ball
        key={color}
        color={color}
        onClick={() => onBallClick(color)}
      />
    )}
  </div>
)

function mapDispatchToProps(dispatch) {
  return {
    onBallClick: color => dispatch(selectActiveColor(color))
  }
}

export default connect(null,mapDispatchToProps)(ControlPanel);
