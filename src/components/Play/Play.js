import React, { Component } from 'react'
import { fetchPlayData } from '../../api-calls'
import PlayText from '../PlayText/PlayText'
import { numToRoms } from '../../helper-functions'
import CharacterList from '../CharacterList/CharacterList'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

export default class Play extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      chapters: [],
      fullTitle: '',
      characters: [],
      text: null,
      error: null
    }
  }

  componentDidMount = () => {
    fetchPlayData(this.state.play)
    .then(data => this.setState({ characters: data.allCharacters, chapters: data.allChapters, fullTitle: data.fullTitle, text: data.fullText }))
    .catch(error => this.setState({ error: parseInt(error.message) }))
  }

  compileDirectory = () => {
    const directory = []
    this.state.chapters.forEach(chapter => {
      if (directory[chapter.act]) {
        directory[chapter.act].push(chapter)
      } else {
        directory[chapter.act] = [chapter]
      }
    })
    return directory.map(act => {
      return (
        <div key={`${this.state.play}-act${directory.indexOf(act)}`}>
          {directory.indexOf(act) ? <h2>Act {numToRoms(directory.indexOf(act), false)}</h2> : <h2>Prologue</h2>}
          {act.map(scene => {
            return (
              <PlayText play={this.state.play} act={directory.indexOf(act)} scene={scene.scene} fullText={this.state.text} characters={this.state.characters} fullTitle={this.state.fullTitle} key={`${this.state.play}-act${directory.indexOf(act)}-scene${scene.scene}`} />
            )
          })}
        </div>
      )
    })
  }

  render = () => {
    if (this.state.error) {
      console.log(this.state.error)
      return <Error error={this.state.error} />
    } else {
      return (
        <div className="play-body">
          <h1>{this.state.fullTitle}</h1>
          {this.state.characters.length && <CharacterList characters={this.state.characters} />}
          {this.compileDirectory()}
        </div>
      )
    }
  }
}

Play.propTypes = {
  play: PropTypes.string
}

