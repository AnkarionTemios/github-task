import React, { Component } from 'react'

import { PurpleButton, TextInput } from 'ui/components'

import './SearchPageForm.css'

export class SearchPageForm extends Component {
  
  state = {
    owner: "",
    repo: ""
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    this.props.redirect(this.state.owner, this.state.repo)
  }

  isValid = () => {
    return [
      this.state.owner.length > 0,
      this.state.repo.length > 0
    ].every(isValid => isValid)
  }

  render() {
    return (
      <div className="search-page-form">
        
        <h1 className="uk-text-center">Welcome to Github search app</h1>

        <form onSubmit={ this.handleSubmit }>

          <div className="uk-flex">

            <TextInput 
              type="text"
              name="owner"
              className="uk-margin-small-right"
              onChange={ this.handleChange }
              value={ this.state.owner }
              placeholder="Enter owner name"
            />

            <TextInput 
              type="text"
              name="repo"
              className="uk-margin-small-left"
              onChange={ this.handleChange }
              value={ this.state.repo }
              placeholder="Enter repo name"
            />

          </div>

          <PurpleButton className="uk-margin-auto uk-display-block uk-margin-small-top" disabled={ !this.isValid() } type="submit">
            Search forks
          </PurpleButton>

        </form>

      </div>
    )
  }
}