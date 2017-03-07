import React from 'react'
import { connect } from 'react-redux'
import { selectActiveColor } from '../../redux/actions'

import './ControlPanel.css'

import Ball from '../Ball/Ball'
import colors from '../../data'

const ControlPanel = ({dispatch}) => (
  <div className="choose-colors">
    {colors.map(color =>
      <Ball
        key={color}
        color={color}
        onClick={() => dispatch(selectActiveColor(color))}
      />
    )}
  </div>
)


export default connect(null, null)(ControlPanel)