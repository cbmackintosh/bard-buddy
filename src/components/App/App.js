
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Genre from '../Genre/Genre';
import Play from '../Play/Play';
import SonnetsMenu from '../SonnetsMenu/SonnetsMenu'
import SavedPassages from '../SavedPassages/SavedPassages'
import './App.css'
import Error from '../Error/Error'

const App = () => {

  return (
    <main className='app'>
      <h1 className='site-header'>Bard Buddy</h1>
      <p className='sub-header'>THE COMPLETE WORKS OF WILLIAM SHAKESPEARE</p>
      <nav>
        <NavLink to='/' className='navlink'>HOME</NavLink>
        <NavLink to='/saved-passages' className='navlink'>SAVED PASSAGES</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path={['/tragedies', '/comedies', '/histories']} render={({ match }) => <Genre genre={match.path} /> } />
        <Route path={['/tragedies/:play', '/comedies/:play', '/histories/:play']} render={({ match }) => <Play play={match.params.play} /> } />
        <Route path='/sonnets' render={() => <SonnetsMenu /> } />
        <Route path='/saved-passages' render={() => <SavedPassages /> } />
        <Route path='*' render={() => <Error error={400} /> } />
      </Switch>
    </main>
  )
}

export default App;