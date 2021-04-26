import React, { Component } from 'react'
import PlayLine from '../PlayLine/PlayLine'

export default class PoemText extends Component {
  constructor({ poem, fullTitle, poemText }) {
    super()
    this.state = {
      isExpanded: false,
      poem: poem,
      fullTitle: fullTitle,
      poemText: poemText
    }
  }

  poemFormatter = () => {
    return this.state.poemText.map(stanza => {
      let lineCounter = stanza.paragraphnum - 1
      const stanzaArray = stanza.plaintext.split('\\n[p]')
      stanzaArray.push('-')
      return stanzaArray.map(line => {
        if (line !== '-') lineCounter++
        return <PlayLine play={this.state.poem} text={line} lineNum={lineCounter} character={'shakespeare'} act={0} scene={0} fullTitle={this.state.fullTitle}/>
      })
    })
  }

  render = () => {
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