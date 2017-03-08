import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { incrementActiveRow } from '../../redux/actions'

import './Row.css'

import Score from '../Score/Score'
import Ball from '../Ball/Ball'

class Row extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guesses: ['', '', '', ''],
      didGuess: false,
      score: {
        black: 0,
        white: 0
      }
    }

    this.evaluateRow = this.evaluateRow.bind(this)
    this.changeBallColor = this.changeBallColor.bind(this)
  }

  checkAnswer(guesses) {
    let black = 0
    let white = 0

    this.props.answer.forEach((ball, i) => {
      if (ball === guesses[i]) {
        black++
      } else if (guesses.indexOf(ball) >= 0) {
        white++
      }
    })

    return {
      black,
      white
    }
  }

  evaluateRow(activeRowIndex) {
    const score = this.checkAnswer(this.state.guesses);
    this.setState({didGuess: true, score})
    this.props.dispatch(incrementActiveRow())

    if (score.black === 4) {
      alert('u won wow neat')
    } else if (activeRowIndex === 10) {
      alert('u didn\'t win u sux')
    }
  }

  changeBallColor(index) {
    if (this.props.index !== this.props.activeRowIndex) {
      return
    }

    let stateCopy = Object.assign({}, this.state)
    stateCopy.guesses[index] = this.props.activeColor
    this.setState(stateCopy)

  }

  render() {
    return (
      <div className="row-item" key={this.props.index}>
        <span className="item-number">{this.props.index}</span>
        <div className="row-balls">
          {this.state.guesses.map((guess, i) =>
            <Ball
              key={i}
              color={guess}
              onClick={() => this.changeBallColor(i)}
            />
          )}
        </div>
        <div className="row-btn">
          {this.state.didGuess && <Score score={this.state.score} />}
          {!this.state.didGuess &&
              this.props.index === this.props.activeRowIndex &&
              <button onClick={() => this.evaluateRow(this.props.activeRowIndex)}>Check</button>
          }
        </div>
      </div>
    )
  }
}

Row.propTypes = {
  index: PropTypes.number
}

function mapStateToProps(state) {
  return {
    activeColor: state.color,
    activeRowIndex: state.index,
    answer: state.answer
  }
}

export default connect(mapStateToProps)(Row)
