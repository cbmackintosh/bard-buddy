import React, { Component } from 'react'
import { getPlayData } from '../../api-calls'
import PlayText from '../PlayText/PlayText'
import { numToRoms } from '../../helper-functions'
import CharacterList from '../CharacterList/CharacterList'

export default class Play extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      chapters: [],
      fullTitle: ''
    }
  }

  componentDidMount() {
    getPlayData('fullTitle', this.state.play)
    .then(data => this.setState({ fullTitle: data }))

    getPlayData('chapters', this.state.play)
    .then(data => this.setState({ chapters: data }))

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
    return directory.map(act => {
      return (
        <div>
          {directory.indexOf(act) ? <h1>Act {numToRoms(directory.indexOf(act), false)}</h1> : <h1>Prologue</h1>}
          {act.map(scene => {
            return (
              <PlayText play={this.state.play} act={directory.indexOf(act)} scene={scene.scene} />
            )
          })}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="play-body">
        <h1>{this.state.fullTitle}</h1>
        <CharacterList play={this.state.play} />
        {this.compileDirectory()}
      </div>
    )
  }
}