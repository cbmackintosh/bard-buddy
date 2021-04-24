import React, { Component } from 'react'
import { getPlayData } from '../../api-calls'

export default class CharacterList extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      isExpanded: false,
      characters: []
    }
  }

  compileCharacterList() {
    return this.state.characters.map(character => {
      return (
        <p><strong>{character.charname}</strong>{character.descrip.length ? `- ${character.descrip}` : null}</p>
      )
    })
  }

  componentDidMount() {
    getPlayData('characters', this.state.play)
    .then(data => this.setState({ characters: data.sort((a, b) => b.speechcount - a.speechcount) }))
  }

  render() {
    console.log(this.state)
    if(!this.state.isExpanded) {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: true })}>Character List +</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: false })}>Character List -</button>
          {this.compileCharacterList()}
        </div>
      )
    }
  }
}