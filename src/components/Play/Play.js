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

  compileDirectory() {
    const directory = []
    this.state.chapters.map(chapter => {
      if (directory[chapter.act]) {
        directory[chapter.act].push(chapter)
      } else {
        directory[chapter.act] = [chapter]
      }
    })
    console.log(directory)
    return directory.map(act => {
      return (
        <div>
          {directory.indexOf(act) ? <h1>Act {directory.indexOf(act)}</h1> : <h1>Prologue</h1>}
          {act.map(scene => {
            return (
              <button>scene {scene.scene}</button>
            )
          })}
        </div>
      )
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="play-body">
        <h1>{this.state.fullTitle}</h1>
        {this.compileDirectory()}
      </div>
    )
  }
}