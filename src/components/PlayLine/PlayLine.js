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
    if (localStorage.getItem('bard-buddy') && JSON.parse(localStorage.getItem('bard-buddy')).find(item => item.text === this.state.text)) {
      this.setState({ isSaved: true })
    } else {
      this.setState({ isSaved: false })
    }
  }

  delete = () => {
    let storage = JSON.parse(localStorage.getItem('bard-buddy'))
    console.log(storage.indexOf(this.state))
    storage.splice(storage.indexOf(storage.find(item => item.text === this.state.text)), 1)
    localStorage.setItem('bard-buddy', JSON.stringify(storage))
    this.setState({ isSaved: false })
  }

  save = () => {
    if (localStorage.getItem('bard-buddy')) {
      let storage = JSON.parse(localStorage.getItem('bard-buddy'))
      storage.push(this.state)
      localStorage.setItem('bard-buddy', JSON.stringify(storage))
      this.setState({ isSaved: true })
    } else {
      localStorage.setItem('bard-buddy', JSON.stringify([this.state]))
      this.setState({ isSaved: true })
    }
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