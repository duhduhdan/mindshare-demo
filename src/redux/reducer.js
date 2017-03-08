import { DID_WIN, SET_ACTIVE_COLOR , INCREMENT_ACTIVE_ROW } from './actions'
import colors from '../data'

function randomizeAnswer() {
  let newColors = []
  for (let i = 0; i < 4; i++) {
    newColors.push(colors[Math.floor(Math.random() * colors.length)])
  }

  return newColors
}

const initialState = {
  index: 1,
  answer: randomizeAnswer()
}

// Reducers
export default function activeColor(state = initialState, action) {
  switch(action.type) {
    case SET_ACTIVE_COLOR:
      return Object.assign({}, state, {color: action.color})
    case INCREMENT_ACTIVE_ROW:
      return Object.assign({}, state, {index: state.index + 1})
    case DID_WIN:
      return Object.assign({}, state, {won: true})
    default:
      return state
  }
}
