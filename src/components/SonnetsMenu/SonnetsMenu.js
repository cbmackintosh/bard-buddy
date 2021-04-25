import React, { Component } from 'react'

export default class SonnetsMenu extends Component {
  constructor() {
    super()
    this.state = {
      sonnets: [],
      poems: []
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Sonnets</h2>
        <h2>Poems</h2>
      </div>
    )
  }
}
