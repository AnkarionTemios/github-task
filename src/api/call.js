import 'whatwg-fetch'

const handleCatch = (error, errorCallback) => {
  errorCallback(error)
}

const handleResponse = (response, errorCallback, successCallback) => {
  if (!response || response.error === true || response.status >= 400) {
    response.json().then(({ errors }) => errorCallback(errors))
  } else {
    response.json().then(successCallback)
  }
}

export const call = (url, data, successCallback, errorCallback) => {

  const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })

  const requestDetails = Object.assign({}, data, { headers: headers })

  fetch(process.env.REACT_APP_API_HOST + `/${url}`, requestDetails)
    .then(response => handleResponse(response, errorCallback, successCallback))
    .catch(error => handleCatch(error, errorCallback))
}
