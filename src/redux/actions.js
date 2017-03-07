export const SET_ACTIVE_COLOR = "SET_ACTIVE_COLOR"
export const UPDATE_SCORE = "UPDATE_SCORE"
export const UPDATE_ACTIVE_ROW = "UPDATE_ACTIVE_ROW"

// Action creators
export function selectActiveColor(color) {
  return {
    type: SET_ACTIVE_COLOR,
    color
  }
}

export function updateScore(score) {
  return {
    type: UPDATE_SCORE,
    score
  }
}

export function updateActiveRow(index) {
  return {
    type: UPDATE_ACTIVE_ROW,
    index
  }
}
