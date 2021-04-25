import React, { Component } from 'react'
import './PlayLine.css'

export default class PlayLine extends Component {
  constructor({ play, text, lineNum, character }) {
    super()
    this.state = {
      play: play,
      text: text,
      lineNum: lineNum,
      character: character,
      isSaved: null
    }
  }

  componentDidMount() {
    if (localStorage.getItem(`${this.state.play}-${this.state.lineNum}`)) {
      this.setState({ isSaved: true })
    } else {
      this.setState({ isSaved: false })
    }
  }

  delete = () => {
    localStorage.removeItem(`${this.state.play}-${this.state.lineNum}`)
    this.setState({ isSaved: false })
  }

  save = () => {
    localStorage.setItem(`${this.state.play}-${this.state.lineNum}`, JSON.stringify(this.state))
    this.setState({ isSaved: true })
  }

  render() {
    if (this.state.isSaved) {
      return (
        <table className='saved-line'>
          <tbody>
            <tr>
              <td className="linenum">{this.state.lineNum % 5 === 0 ? this.state.lineNum : " "}</td>
              <td onClick={() => this.delete()}>{this.state.text.replace('\\n', '')}</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      return (
        <table className='line'>
          <tbody>
            <tr>
              <td className="linenum">{this.state.lineNum % 5 === 0 ? this.state.lineNum : " "}</td>
              <td onClick={() => this.save()}>{this.state.text.replace('\\n', '')}</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }

}