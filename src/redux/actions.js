export const SET_ACTIVE_COLOR = 'SET_ACTIVE_COLOR'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const INCREMENT_ACTIVE_ROW = 'INCREMENT_ACTIVE_ROW'
export const DID_WIN = 'DID_WIN'

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

export function incrementActiveRow() {
  return {
    type: INCREMENT_ACTIVE_ROW
  }
}

export function didWin() {
  return {
    type: DID_WIN
  }
}
