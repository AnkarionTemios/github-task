import React, { Component } from 'react'

import { TextInput, PurpleButton } from 'ui/components'

export class ForksTableHeader extends Component {
  
  state = {
    owner: "",
    repo: ""
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchForks(this.state.owner, this.state.repo)
  }

  isValid = () => {
    return [
      this.state.owner.length > 0,
      this.state.repo.length > 0
    ].every(isValid => isValid)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>

        <div className="uk-flex uk-padding-small">
        
          <div className="uk-flex uk-width-expand">
          
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

          <div className="uk-width-auto">
            
            <PurpleButton disabled={ !this.isValid() } type="submit">
              Search forks
            </PurpleButton>
          
          </div>

        </div>

      </form>     
    )
  }
}