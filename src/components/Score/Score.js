import React, { PropTypes } from 'react'
import Ball from '../Ball/Ball'

import './Score.css'

function determineColor(score) {
  let balls = []

  for (let i = 0; i < 4; i++) {
    balls.push(
      <Ball
        key={i}
        color={i < score.white ? 'white' : i < score.white + score.black ? 'black' : ''}
      />
    )
  }

  return balls
}

const Score = ({ score }) => {
  if (!score) {
    return (
      <div className="empty-score">
        <Ball />
        <Ball />
        <Ball />
        <Ball />
      </div>
    )
  }

  return (
    <div className="score">
      {determineColor(score)}
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.object
}

export default Score
