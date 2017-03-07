import { SET_ACTIVE_COLOR } from './actions'

// Reducers
export default function activeColor(state={}, action) {
  if (action.type === SET_ACTIVE_COLOR) {
    return Object.assign({}, state, {color: action.color})
  }

  return state;
}
