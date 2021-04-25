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
    const sonnet = this.state.sonnetText.split('\\n[p]')
    return this.formQuatrains(sonnet).map(line => {
      return (
        <p>{line}</p>
      )
    })
  }

  formQuatrains(sonnet) {
    let quatrain1 = sonnet.slice(0, 4)
    quatrain1.push('-')
    let quatrain2 = sonnet.slice(4, 8)
    quatrain2.push('-')
    let quatrain3 = sonnet.slice(8, 12)
    quatrain3.push('-')
    let couplet = sonnet.slice(12, 14)
    return quatrain1.concat(quatrain2).concat(quatrain3).concat(couplet)
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