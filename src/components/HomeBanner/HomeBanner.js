import React, { Component } from 'react'
import { getRandomQuote } from '../../api-calls'
import shakespeare from '../../assets/shakespeare.jpg'
import './HomeBanner.css'

export default class HomeBanner extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      play: ''
    }
  }

  componentDidMount() {
    getRandomQuote()
    .then(data => this.setState({ quote: data.quote.quote, play: data.quote.play }))
  }

  render() {
    return (
      <div className='top-banner'>
        <div className='quote-container'>
          <p>"{this.state.quote}"</p>
          <p>{this.state.play}</p>
        </div>
        <img className='portrait' src={shakespeare} />
      </div>
    )
  }

}