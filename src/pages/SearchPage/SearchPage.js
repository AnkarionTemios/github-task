import React from 'react'

import { connect } from 'react-redux'
import { redirect } from 'store/search'
 
import { SearchPageForm } from 'ui/components'
import { Page } from 'ui/base'

const SearchPage = ({ loading, error, redirect }) => (
  <Page loading={ loading } error={ error } className="search-page">
    
    <div className="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle">
      <SearchPageForm redirect={ redirect } />
    </div>
  
  </Page>
)

const mapStateToProps = state => ({
  ...state.search
})

const mapDispatchToProps = dispatch => ({
  redirect: (owner, repo) => dispatch(redirect(owner, repo))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)