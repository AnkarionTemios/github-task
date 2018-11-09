import React from 'react'

import classNames from 'classnames'

import './PurpleButton.css'

export const PurpleButton = ({ type, children, className, onClick, disabled }) => (
  <button className={ classNames("purple-button", className) } type={ type } disabled={ disabled } onClick={ onClick }>
    { children }
  </button>
)