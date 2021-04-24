import React, { Component } from 'react'
import { getPlayData } from '../../api-calls'

export default class Play extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      chapters: [],
      characters: [],
      fullTitle: ''
    }
  }

  componentDidMount() {
    getPlayData('chapters', this.state.play)
    .then(data => this.setState({ chapters: data }))

    getPlayData('characters', this.state.play)
    .then(data => this.setState({ characters: data }))

    getPlayData('fullTitle', this.state.play)
    .then(data => this.setState({ fullTitle: data }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="play-body">
        <h1>{this.state.fullTitle}</h1>
      </div>
    )
  }
}