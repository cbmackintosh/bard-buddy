import React, { Component } from 'react'
import './PlayLine.css'

export default class PlayLine extends Component {
  constructor({ text, lineNum, character }) {
    super()
    this.state = {
      text: text,
      lineNum: lineNum,
      character: character
    }
  }

  render() {
    if(this.state.character === 'xxx') {
      return (
        <table>
          <tr>
            <td className="linenum">{this.state.lineNum % 5 === 0 ? this.state.lineNum : " "}</td>
            <td><i>{this.state.text.replace('\\n', '')}</i></td>
          </tr>
        </table>
      )
    } else {
      return (
        <table>
          <tr>
            <td className="linenum">{this.state.lineNum % 5 === 0 ? this.state.lineNum : " "}</td>
            <td>{this.state.text.replace('\\n', '')}</td>
          </tr>
        </table>
      )
    }
  }

}