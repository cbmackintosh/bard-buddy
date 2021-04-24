
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { getPlayData } from '../../api-calls'
import Home from '../Home/Home';
import Genre from '../Genre/Genre';
import Play from '../Play/Play';

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      allTitles: []
    }
  }

  componentDidMount() {
    getPlayData('allTitles', '')
    .then(data => this.setState({ allTitles: data }))
  }

  render() {
    console.log(this.state)
    return (
      <main className='app'>
        <h1>BARD BUDDY</h1>
        <nav>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/'>SAVED PASSAGES</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path={['/tragedies', '/comedies', '/histories']} render={({ match }) => <Genre genre={match.path} plays={this.state.allTitles.filter(play => match.path === `/${play.genre}`)} /> } />
          <Route path={['/tragedies/:play', 'comedies/:play', '/histories/:play']} render={({ match }) => <Play play={match.params.play} /> } />
          <Route path='#' />
        </Switch>
      </main>
    )
  }

}