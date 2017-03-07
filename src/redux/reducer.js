import { SET_ACTIVE_COLOR , INCREMENT_ACTIVE_ROW } from './actions'

const initialState = {
  index: 1,
  answer: ['blue', 'green', 'red', 'yellow']
}

// Reducers
export default function activeColor(state = initialState, action) {
  switch(action.type) {
    case SET_ACTIVE_COLOR:
      return Object.assign({}, state, {color: action.color})
    case INCREMENT_ACTIVE_ROW:
      return Object.assign({}, state, {index : state.index + 1})
    default:
      return state
  }
}
