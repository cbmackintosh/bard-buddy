import React, { Component } from 'react'

export default class CharacterList extends Component {
  constructor({ characters }) {
    super()
    this.state = {
      isExpanded: false,
      characters: characters.sort((a, b) => b.speechcount - a.speechcount)
    }
  }

  compileCharacterList = () => {
    return this.state.characters.map(character => {
      return (
        <p key={character.charid}><strong>{character.charname}</strong>{character.descrip.length ? `- ${character.descrip}` : null}</p>
      )
    })
  }

  render = () => {
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