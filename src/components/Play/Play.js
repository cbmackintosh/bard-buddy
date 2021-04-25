import React, { Component } from 'react'
import { fetchPlayData } from '../../api-calls'
import PlayText from '../PlayText/PlayText'
import { numToRoms } from '../../helper-functions'
import CharacterList from '../CharacterList/CharacterList'

export default class Play extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      chapters: [],
      fullTitle: '',
      characters: [],
      text: null
    }
  }

  componentDidMount() {
    fetchPlayData(this.state.play)
    .then(data => this.setState({ characters: data.allCharacters, chapters: data.allChapters, fullTitle: data.fullTitle, text: data.fullText }))
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
        <div key={`${this.state.play}-act${directory.indexOf(act)}`}>
          {directory.indexOf(act) ? <h1>Act {numToRoms(directory.indexOf(act), false)}</h1> : <h1>Prologue</h1>}
          {act.map(scene => {
            return (
              <PlayText act={directory.indexOf(act)} scene={scene.scene} fullText={this.state.text} characters={this.state.characters} key={`${this.state.play}-act${directory.indexOf(act)}-scene${scene.scene}`} />
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
        {this.state.characters.length && <CharacterList characters={this.state.characters} />}
        {this.compileDirectory()}
      </div>
    )
  }
}