import * as actionTypes from './actionTypes'

const initialState = {
  loading: false,
  error: false,
  forks: []
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
    case actionTypes.HIDE_LOADER:
      return {
        ...state,
        loading: false
      }
    case actionTypes.FETCH_FORKS_SUCCESS:
      return {
        ...state,
        forks: action.forks,
        error: false
      }
    case actionTypes.FETCH_FORKS_FAIL:
      return {
        ...state,
        forks: [],
        error: true
      }
    default: return state
  }
}