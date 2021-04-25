import React, { Component } from 'react'
import PlayLine from '../PlayLine/PlayLine'

export default class SavedPassages extends Component {
  constructor() {
    super()
    this.state = {
      savedPassages: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem('bard-buddy')) {
      let storage = JSON.parse(localStorage.getItem('bard-buddy'))
      this.setState({ savedPassages: storage })
    }
  }

  compileSavedPassages() {
    return this.state.savedPassages.map(line => {
      let play = line.play
      let text = line.text
      let lineNum = line.lineNum
      let character = line.character
      return <PlayLine play={play} text={text} lineNum={lineNum} character={character} />
    })
  }

  render() {
    console.log(this.state)
    if (!this.state.savedPassages.length) {
      return (
        <div>
          <h2>You have no saved passages!</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Your saved passages:</h2>
          {this.compileSavedPassages()}
        </div>
      )
    }
  }
}