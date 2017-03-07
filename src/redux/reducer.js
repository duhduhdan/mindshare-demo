import { SET_ACTIVE_COLOR , UPDATE_ACTIVE_ROW } from './actions'

// Reducers
export default function activeColor(state={index: 1}, action) {
  switch(action.type) {
    case SET_ACTIVE_COLOR :
      return Object.assign({}, state, {color: action.color})
    case UPDATE_ACTIVE_ROW :
      return Object.assign({}, state, { index : state.index + 1 })
  }
  return state;
}
