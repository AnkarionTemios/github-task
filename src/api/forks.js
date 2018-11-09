import { call } from './call'

export const fetchForks = (owner, repo, successCallback, errorCallback) => 
  call(
    `repos/${owner}/${repo}/forks`,
    { method: 'GET' },
    successCallback,
    errorCallback
  )