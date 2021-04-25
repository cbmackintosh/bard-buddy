import React, { Component } from 'react'

export default class SonnetText extends Component {
  constructor({ sonnetText, sonnetNumber }) {
    super()
    this.state ={
      isExpanded: false,
      number: sonnetNumber,
      sonnetText: sonnetText
    }
  }

  sonnetCompiler() {
    return this.state.sonnetText.split('\\n[p]').map(line => {
      return (
        <p>{line}</p>
      )
    })
  }

  render() {
    if (!this.state.isExpanded) {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: true })}>Sonnet #{this.state.number} +</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ isExpanded: false })}>Sonnet #{this.state.number} -</button>
          <p>{this.sonnetCompiler()}</p>
        </div>
      )
    }
  }
}