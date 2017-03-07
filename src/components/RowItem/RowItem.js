import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { incrementActiveRow, UPDATE_ACTIVE_ROW } from '../../redux/actions'

import './RowItem.css'

import Score from '../Score/Score'
import RowItemBall from '../RowItemBalls/RowItemBall'

class RowItem extends Component {
  constructor(props) {
    super(props)
    this.state = {guess: ['', '', '', ''], didGuess: false}

    this.evaluateRow = this.evaluateRow.bind(this)
  }

  evaluateRow(activeRowIndex) {
    console.log('evaluating');
    this.setState({didGuess: true})
    this.props.dispatch(incrementActiveRow())
  }

  render() {
    const { index, activeRowIndex, activeColor } = this.props

    return (
      <li className="row-item" key={index}>
        <span className="item-number">{index}</span>
        <RowItemBall rowIndex={index} />
        <RowItemBall rowIndex={index} />
        <RowItemBall rowIndex={index} />
        <RowItemBall rowIndex={index} />
        {this.state.didGuess && <Score />}
        {!this.state.didGuess && index === activeRowIndex && <button onClick={this.evaluateRow}>Check</button>}
      </li>
    )
  }
}

RowItem.propTypes = {
  index: PropTypes.number,
  activeColor: PropTypes.string,
  score: PropTypes.any
}

function mapStateToProps(state) {
  return {
    activeRowIndex: state.index
  }
}

export default connect(mapStateToProps)(RowItem)
