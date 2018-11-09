import React, { Component } from 'react'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import './ForksTable.css'

export class ForksTable extends Component {

  state = { 
    page: 0
  }
  
  componentDidMount() {
    if (this.props.page !== null && this.props.page <= this.props.forks.length / 10) {
      this.setState({ page: this.props.page - 1 })
    }
  }

  handlePageChange = page => this.setState({ page }) 

  render() {
    const data = this.props.forks && [
      ...this.props.forks.map(fork => ({
        name: fork.full_name,
        owner: fork.owner.login,
        stars: fork.stargazers_count,
        link: fork.html_url,
      }))
    ]
  
    const columns = [
      {
        Header: () => <span className="name-cell-header">Name</span>,
        accessor: ({ name }) => (
          <span>{ name }</span>
        ),
        className: "name-cell",
        id: "name-cell"
      },
      {
        Header: () => <span className="owner-cell-header">Owner</span>,
        accessor: ({ owner }) => (
          <span>{ owner }</span>
        ),
        className: "owner-cell",
        id: "owner-cell"
      },
      {
        Header: () => <span className="stars-cell-header">Stars</span>,
        accessor: ({ stars }) => (
          <span>{ stars }</span>
        ),
        className: "stars-cell",
        id: "stars-cell"
      },
      {
        Header: () => <span className="link-cell-header">Link</span>,
        accessor: ({ link }) => (
          <a href={ link }>Link to repo</a>
        ),
        className: "link-cell",
        id: "link-cell"
      }
    ]
  
    return (
      <div className="forks-table">
  
        <ReactTable
          resizable={ false }
          minRows={ 0 }
          showPagination={ true }
          page={ this.state.page }
          onPageChange={ this.handlePageChange }
          pageSize={ 10 }
          columns={ columns }
          data={ data }
        />
  
      </div>
    )
  }
}