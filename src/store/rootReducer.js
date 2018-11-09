import { combineReducers } from 'redux'

import { searchReducer } from 'store/search'

export default combineReducers({
  search: searchReducer
})