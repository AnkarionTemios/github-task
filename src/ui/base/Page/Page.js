import React from 'react'

import classNames from 'classnames'

import { Loader, ErrorNotification } from 'ui/base'

import './Page.css'

export const Page = ({ children, className, loading, error }) => (
  <div className={ classNames("page", className) }>
    {
      loading ?
      <Loader /> :
      error ?
      <ErrorNotification /> :
      children
    }
  </div>
)