import React, { Component } from 'react'
import { fetchAllPoetry } from '../../api-calls'
import SonnetText from '../SonnetText/SonnetText'
import PoemText from '../PoemText/PoemText'

export default class SonnetsMenu extends Component {
  constructor() {
    super()
    this.state = {
      sonnets: [],
      poems: []
    }
  }

  componentDidMount = () => {
    fetchAllPoetry()
    .then(data => this.setState({ sonnets: data.sonnets.sort((a, b) => a.chapter - b.chapter), poems: data.poems }))
  }

  compileSonnetDirectory() {
    return this.state.sonnets.map(sonnet => {
      return (
        <div key={`sonnet${sonnet.chapter}`}>
          <SonnetText sonnetText={sonnet.plaintext} sonnetNumber={sonnet.chapter} />
        </div>
      )
    })
  }

  render = () => {
    console.log(this.state)
    return (
      <div>
        <h2>Sonnets</h2>
          {this.compileSonnetDirectory()}
        <h2>Poems</h2>
          {this.state.poems.length && <PoemText poem={'loverscomplaint'} fullTitle={"Lover's Complaint"} poemText={this.state.poems.filter(poem => poem.title === 'loverscomplaint')} />}
          {this.state.poems.length && <PoemText poem={'passionatepilgrim'} fullTitle={"Passionate Pilgrim"} poemText={this.state.poems.filter(poem => poem.title === 'passionatepilgrim')} />}
          {this.state.poems.length && <PoemText poem={'phoenixturtle'} fullTitle={"Phoenix and the Turtle"} poemText={this.state.poems.filter(poem => poem.title === 'phoenixturtle')} />}
          {this.state.poems.length && <PoemText poem={'rapelucrece'} fullTitle={"Rape of Lucrece"} poemText={this.state.poems.filter(poem => poem.title === 'rapelucrece')} />}
          {this.state.poems.length && <PoemText poem={'venusadonis'} fullTitle={"Venus and Adonis"} poemText={this.state.poems.filter(poem => poem.title === 'venusadonis')} />}
      </div>
    )
  }
}
