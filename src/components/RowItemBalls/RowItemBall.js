import React from 'react'
import { connect } from 'react-redux'

import Ball from '../Ball/Ball'

class RowItemBall extends React.Component {
  constructor(props) {
    super(props)

    this.state = {color: ''}
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const { activeColor, activeRowIndex, rowIndex } = this.props

    if (rowIndex !== activeRowIndex) {
      return
    }

    this.setState({color: activeColor})
  }

  render() {
    return (
      <Ball color={this.state.color} onClick={this.onClick} />
    )
  }
}

function mapStateToProps(state) {
  return {
    activeColor: state.color,
    activeRowIndex: state.index
  }
}

export default connect(mapStateToProps)(RowItemBall)
