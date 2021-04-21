import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import { getPlay } from './api-calls'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      play: ''
    }
  }

  componentDidMount() {
    getPlay()
    .then(data => console.log(data))
  }

  render() {
    console.log(this.state)
    return(
      <h1>Bard Buddy</h1>
    )
  }
}
