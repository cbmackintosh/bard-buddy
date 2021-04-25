import React, { Component } from 'react'
import { getFullTitle } from '../../api-calls' 

export default class PoemText extends Component {
  constructor({ fullTitle, poemText }) {
    super()
    this.state = {
      isExpanded: false,
      fullTitle: fullTitle,
      poemText: poemText
    }
  }

  poemFormatter() {
    return this.state.poemText.map(stanza => {
      const stanzaArray = stanza.plaintext.split('\\n[p]')
      stanzaArray.push('-')
      return stanzaArray.map(line => {
        return (
          <div>
            <p>{line.replace('\\n', '')}</p>
          </div>
        )
      })
    })
  }

  render() {
    console.log(this.state)
    if (!this.state.isExpanded) {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: true })}>{this.state.fullTitle} +</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: false })}>{this.state.fullTitle} -</button>
          {this.poemFormatter()}
        </div>
      )
    }
  }
}