import React, { Component } from 'react'
import { numToRoms } from '../../helper-functions'

export default class PlayText extends Component {
  constructor({ act, scene, fullText, characters }) {
    super()
    this.state = {
      isExpanded: false,
      act: act,
      scene: scene,
      text: fullText.filter(graf => graf.section === act && graf.chapter === scene),
      characters: characters
    }
  }

  grafCompiler = () => {
    return this.state.text.map(graf => {
      return (
        <div key={graf.paragraphID}>
          {graf.charid === 'xxx' ? <p></p> : <p><strong>{this.state.characters.find(character => character.charid === graf.charid).charname.toUpperCase()}</strong></p>}
          {graf.plaintext.split('\\n[p]').map(line => {
            if (graf.charid === 'xxx') {
              return <i key={`${graf.paragraphID}-${graf.plaintext.split('\\n[p]').indexOf(line)}`}>{line.replace('\\n', '')}</i>
            } else {
              return <p key={`${graf.paragraphID}-${graf.plaintext.split('\\n[p]').indexOf(line)}`}>{line.replace('\\n', '')}</p>
            }    
          })}
        </div>
      )
    })
  }

  render = () => {
    if(!this.state.isExpanded) {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: true })}>Scene {numToRoms(this.state.scene, true)} +</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: false })}>Scene {numToRoms(this.state.scene, true)} -</button>
          {this.grafCompiler()}
        </div>
      )
    }
  }

}