import React from 'react'

import classNames from 'classnames'

import './TextInput.css'

export const TextInput = ({ onChange, value, placeholder, className, type, name }) => (
  <input 
    className={ classNames("text-input",  className) }
    name={ name }
    type={ type }
    value={ value }
    onChange={ onChange }
    placeholder={ placeholder }
  />
)