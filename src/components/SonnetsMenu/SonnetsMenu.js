import React, { Component } from 'react'
import { fetchAllPoetry } from '../../api-calls'
import SonnetText from '../SonnetText/SonnetText'

export default class SonnetsMenu extends Component {
  constructor() {
    super()
    this.state = {
      sonnets: [],
      poems: []
    }
  }

  componentDidMount() {
    fetchAllPoetry()
    .then(data => this.setState({ sonnets: data.sonnets.sort((a, b) => a.chapter - b.chapter), poems: data.poems }))
  }

  compileSonnetDirectory() {
    return this.state.sonnets.map(sonnet => {
      return (
        <div>
          <SonnetText sonnetText={sonnet.plaintext} sonnetNumber={sonnet.chapter} />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Sonnets</h2>
          {this.compileSonnetDirectory()}
        <h2>Poems</h2>
      </div>
    )
  }
}
