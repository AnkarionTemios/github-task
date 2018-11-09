import React from 'react'

import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { rootReducer } from 'store'
import createHistory from 'history/createBrowserHistory'

import * as pages from 'pages'

const history = createHistory()

const historyMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, historyMiddleware))
)

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        
        <Route path="/" exact={ true } component={ pages.SearchPage } />

        <Route path="/results" component={ pages.ResultsPage } /> 

      </Switch>
    </Router>
  </Provider>
)