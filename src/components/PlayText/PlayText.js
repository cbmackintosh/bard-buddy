import React, { Component } from 'react'
import { getScene } from '../../api-calls'
import { numToRoms } from '../../helper-functions'

export default class PlayText extends Component {
  constructor({ play, act, scene }) {
    super()
    this.state = {
      isExpanded: false,
      play: play,
      act: act,
      scene: scene,
      text: null
    }
  }

  componentDidMount() {
    getScene(this.state.play, this.state.act, this.state.scene)
    .then(data => this.setState({ text: data }))
  }

  grafCompiler() {
    return this.state.text.map(graf => {
      return (
        <div>
          <p><strong>{graf.charid}</strong></p>
          {graf.plaintext.split('n[p]').map(line => {
            return <p>{line}</p>
          })}
        </div>
      )
    })
  }

  render() {
    console.log(this.state)
    if(!this.state.isExpanded) {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: true })}>Scene {numToRoms(this.state.scene)} +</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: false })}>Scene {numToRoms(this.state.scene)} -</button>
          {this.grafCompiler()}
        </div>
      )
    }
  }

}