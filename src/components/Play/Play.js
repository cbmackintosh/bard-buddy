import React, { Component } from 'react'
import { getPlayData } from '../../api-calls'
import PlayText from '../PlayText/PlayText'

export default class Play extends Component {
  constructor({ play }) {
    super()
    this.state = {
      play: play,
      chapters: [],
      characters: [],
      fullTitle: ''
    }
  }

  componentDidMount() {
    getPlayData('fullTitle', this.state.play)
    .then(data => this.setState({ fullTitle: data }))

    getPlayData('chapters', this.state.play)
    .then(data => this.setState({ chapters: data }))

    getPlayData('characters', this.state.play)
    .then(data => this.setState({ characters: data }))
  }

  compileDirectory() {
    const directory = []
    this.state.chapters.map(chapter => {
      if (directory[chapter.act]) {
        directory[chapter.act].push(chapter)
      } else {
        directory[chapter.act] = [chapter]
      }
    })
    return directory.map(act => {
      return (
        <div>
          {directory.indexOf(act) ? <h1>Act {this.numToRoms(directory.indexOf(act), false)}</h1> : <h1>Prologue</h1>}
          {act.map(scene => {
            return (
              <PlayText play={this.state.play} act={directory.indexOf(act)} scene={scene.scene} />
            )
          })}
        </div>
      )
    })
  }

  numToRoms = (num, isLowerCase) => {
    const digits = num.toString().split("");
    const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];
    let romanNumerals = "";
    for(var i = 2; i >= 0; i--) {
        romanNumerals = (key[+digits.pop() + (i * 10)] || "") + romanNumerals;
    }
    if (isLowerCase) {
      return romanNumerals.toLowerCase()
    } else {
      return romanNumerals
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="play-body">
        <h1>{this.state.fullTitle}</h1>
        {this.compileDirectory()}
      </div>
    )
  }
}