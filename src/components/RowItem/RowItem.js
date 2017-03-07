import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { incrementActiveRow, UPDATE_ACTIVE_ROW } from '../../redux/actions'

import './RowItem.css'

import Score from '../Score/Score'
// import RowItemBall from '../RowItemBalls/RowItemBall'
import Ball from '../Ball/Ball'

class RowItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guesses: ['', '', '', ''],
      didGuess: false
    }

    this.evaluateRow = this.evaluateRow.bind(this)
    this.changeBallColor = this.changeBallColor.bind(this)
  }

  checkAnswer(guess) {
    console.log(this.answer);
    console.log(guess);
  }

  evaluateRow(activeRowIndex) {
    this.setState({didGuess: true})
    this.props.dispatch(incrementActiveRow())
  }

  changeBallColor(index) {
    let stateCopy = Object.assign({}, this.state)
    stateCopy.guesses[index] = this.props.activeColor
    this.setState(stateCopy)
  }

  render() {
    const { index, activeRowIndex, activeColor } = this.props

    return (
      <li className="row-item" key={index}>
        <span className="item-number">{index}</span>
        {this.state.guesses.map((guess, i) => <Ball key={i} color={guess} onClick={() => this.changeBallColor(i, activeColor)} />)}
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
    activeColor: state.color,
    activeRowIndex: state.index,
    answer: state.answer
  }
}

export default connect(mapStateToProps)(RowItem)
