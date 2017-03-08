import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectActiveColor } from '../../redux/actions'

import './ControlPanel.css'

import Ball from '../Ball/Ball'
import colors from '../../data'

const ControlPanel = ({ dispatch }) => (
  <div className="control-panel">
    <span className="title">Choose a color</span>
    <div className="choose-colors">
      {colors.map(color =>
        <Ball
          key={color}
          color={color}
          onClick={() => dispatch(selectActiveColor(color))}
        />
      )}
    </div>
  </div>
)

ControlPanel.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(ControlPanel)
