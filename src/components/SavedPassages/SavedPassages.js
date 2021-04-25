import React, { Component } from 'react'

export default class SavedPassages extends Component {
  constructor() {
    super()
    this.state = {
      savedPassages: []
    }
  }

  componentDidMount() {
    this.setState({ savedPassages: localStorage.getItem('romeojuliet-1') })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Your saved passages:</h2>
      </div>
    )
  }
}