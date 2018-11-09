import * as actionTypes from './actionTypes'
import { push } from 'react-router-redux'
import API from 'api'

const showLoader = () => ({ type: actionTypes.SHOW_LOADER })
const hideLoader = () => ({ type: actionTypes.HIDE_LOADER })

const fetchForksFail = () => ({ type: actionTypes.FETCH_FORKS_FAIL })

const fetchForksSuccess = forks => ({
  type: actionTypes.FETCH_FORKS_SUCCESS,
  forks
})

export const fetchForks = (owner, repo) => dispatch => {
  dispatch(showLoader())

  API.forks.fetchForks(
    owner,
    repo,
    response => {
      dispatch(fetchForksSuccess(response))
      dispatch(hideLoader())
    },
    () => {
      dispatch(fetchForksFail())
      dispatch(hideLoader())
    }
  )
}

export const redirect = (owner, repo) => dispatch => {
  dispatch(fetchForks(owner, repo))
  dispatch(push('/results'))
}