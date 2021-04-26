import React, { Component } from 'react'
import PlayLine from '../PlayLine/PlayLine'
import { numToRoms } from '../../helper-functions'
import './SavedPassages.css'

export default class SavedPassages extends Component {
  constructor() {
    super()
    this.state = {
      savedPassages: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem('bard-buddy')) {
      let storage = JSON.parse(localStorage.getItem('bard-buddy'))
      this.setState({ savedPassages: storage })
    }
  }

  returnPassageGroupings() {
    let representedWorks = []
    this.state.savedPassages.forEach(el => !representedWorks.includes(el.play) ? representedWorks.push(el.play) : null)
    const groupings = representedWorks.map(work => {
      return this.state.savedPassages.filter(el => el.play === work).sort((a, b) => a.lineNum - b.lineNum)
    })
    let finalGroupings = []
    groupings.forEach(group => {
      let workingArray = []
      for (var i = 0; i < group.length; i++) {
        if (group[i + 1] && group[i + 1].lineNum - group[i].lineNum === 1) {
          workingArray.push(group[i])
        } else {
          workingArray.push(group[i])
          finalGroupings.push(workingArray)
          workingArray = []
        }
      }
    })
    return finalGroupings
  }

  compileSavedPassages() {
    return this.returnPassageGroupings().map(group => {
      return (
        <div className='saved-passage'>
          <h3>{this.compilePassageHeader(group[0].fullTitle, group[0].act, group[0].scene, group[0].lineNum, group[group.length - 1].lineNum)}</h3>
          {group.map(line => {
            return <PlayLine play={line.play} text={line.text} lineNum={line.lineNum} character={line.character} act={line.act} scene={line.scene} fullTitle={line.fullTitle} />
          })}
        </div>
      )
    })
  }

  compilePassageHeader(fullTitle, act, scene, firstLine, secondLine) {
    let lines = ''
    if (firstLine === secondLine) {
      lines = `line ${firstLine}`
    } else {
      lines = `lines ${firstLine}-${secondLine}`
    }
    if (!act || !scene) {
      return `${fullTitle}: ${lines}`
    } else {
      return `${fullTitle}: Act ${numToRoms(act)}, scene ${numToRoms(scene, true)}, ${lines}`
    }
  }

  render() {
    console.log(this.state)
    if (!this.state.savedPassages.length) {
      return (
        <div>
          <h2>You have no saved passages!</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Your saved passages:</h1>
          <div className='saved-passage-container'>
            {this.compileSavedPassages()}
          </div>
        </div>
      )
    }
  }
}