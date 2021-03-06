import React, { Component } from 'react'
import { numToRoms } from '../../helper-functions'
import PlayLine from '../PlayLine/PlayLine'
import './PlayText.css'
import PropTypes from 'prop-types'

export default class PlayText extends Component {
  constructor({ play, act, scene, fullText, characters, fullTitle }) {
    super()
    this.state = {
      isExpanded: false,
      play: play,
      act: act,
      scene: scene,
      text: fullText.filter(graf => graf.section === act && graf.chapter === scene),
      characters: characters,
      fullTitle: fullTitle
    }
  }

  grafCompiler = () => {
    return this.state.text.map(graf => {
      let counter = graf.paragraphnum
      return (
        <div key={graf.paragraphID}>
          {graf.charid === 'xxx' ? <p></p> : <p className='character'><strong>{this.state.characters.find(character => character.charid === graf.charid).charname.toUpperCase()}</strong></p>}
          {graf.plaintext.split('\\n[p]').map(line => {
            return <PlayLine play={this.state.play} text={line} lineNum={counter++} character={graf.charid} act={this.state.act} scene={this.state.scene} fullTitle={this.state.fullTitle} key={line} />
          })}
        </div>
      )
    })
  }

  render = () => {
    if(!this.state.isExpanded) {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: true })}>Scene {numToRoms(this.state.scene, true)} ▽</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: false })}>Scene {numToRoms(this.state.scene, true)} △</button>
          {this.grafCompiler()}
        </div>
      )
    }
  }

}

PlayText.propTypes = {
  isExpanded: PropTypes.bool,
  play: PropTypes.string,
  act: PropTypes.number,
  scene: PropTypes.number,
  text: PropTypes.string,
  characters: PropTypes.array,
  fullTitle: PropTypes.string
}