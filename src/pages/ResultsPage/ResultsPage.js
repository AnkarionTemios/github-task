import React, { Component } from 'react'

import parseQuery from 'query-string'

import { connect } from 'react-redux'
import { fetchForks } from 'store/search'

import { Page } from 'ui/base'
import { ForksManager } from 'ui/components'

class ResultsPage extends Component {

  state = {
    page: null
  }

  componentDidMount() {
    if (window.location.search) {
      const parsedQuery = parseQuery.parse(window.location.search)
      this.props.fetchForks(parsedQuery.owner, parsedQuery.repo)

      if (parsedQuery.page) {
        this.setState({ page: parsedQuery.page })
      }
    }
  }

  render() {
    const { error, loading, forks, fetchForks } = this.props
    return (
      <Page error={ error } loading={ loading } className="results-page">
        <ForksManager page={ this.state.page } forks={ forks } fetchForks={ fetchForks } />
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  ...state.search
})

const mapDispatchToProps = dispatch => ({
  fetchForks: (owner, repo) => dispatch(fetchForks(owner, repo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)