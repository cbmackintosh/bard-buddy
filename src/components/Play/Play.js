import React, { Component } from 'react'
import { getPlayData } from '../../api-calls'

export default class Play extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      chapters: []
    }
  }

  componentDidMount() {
    getPlayData('chapters', this.state.play)
    .then(data => this.setState({ chapters: data }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="play-body">
        <h1>This is a play</h1>
      </div>
    )
  }
}