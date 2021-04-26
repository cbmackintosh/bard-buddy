import React, { Component } from 'react'
import './PlayLine.css'
import PropTypes from 'prop-types'

export default class PlayLine extends Component {
  constructor({ play, text, lineNum, character, act, scene, fullTitle }) {
    super()
    this.state = {
      play: play,
      text: text,
      lineNum: lineNum,
      character: character,
      isSaved: null,
      act: act,
      scene: scene,
      fullTitle: fullTitle
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
    storage.splice(storage.indexOf(storage.find(item => item.text === this.state.text)), 1)
    localStorage.setItem('bard-buddy', JSON.stringify(storage))
    this.setState({ isSaved: false })
  }

  save = () => {
    if (localStorage.getItem('bard-buddy')) {
      this.setState({ isSaved: true })
      let storage = JSON.parse(localStorage.getItem('bard-buddy'))
      storage.push(this.state)
      localStorage.setItem('bard-buddy', JSON.stringify(storage))
    } else {
      this.setState({ isSaved: true })
      localStorage.setItem('bard-buddy', JSON.stringify([this.state]))
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

PlayLine.propTypes = {
  play: PropTypes.string,
  text: PropTypes.string,
  lineNum: PropTypes.number,
  character: PropTypes.string,
  isSaved: PropTypes.bool,
  act: PropTypes.number,
  scene: PropTypes.number,
  fullTitle: PropTypes.string
}