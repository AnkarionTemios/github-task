import React from 'react'

import { ForksTable, ForksTableHeader } from 'ui/components'

export const ForksManager = ({ forks, fetchForks, page }) => (
  <div className="forks-manager">

    <ForksTableHeader fetchForks={ fetchForks } />
  
    <ForksTable page={ page } forks={ forks } />

  </div>
)