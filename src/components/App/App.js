
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Genre from '../Genre/Genre';
import Play from '../Play/Play';
import SonnetsMenu from '../SonnetsMenu/SonnetsMenu'

const App = () => {

  return (
    <main className='app'>
      <h1>BARD BUDDY</h1>
      <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/'>SAVED PASSAGES</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path={['/tragedies', '/comedies', '/histories']} render={({ match }) => <Genre genre={match.path} /> } />
        <Route path={['/tragedies/:play', '/comedies/:play', '/histories/:play']} render={({ match }) => <Play play={match.params.play} /> } />
        <Route path='/sonnets' render={() => <SonnetsMenu /> } />
        <Route path='*' />
      </Switch>
    </main>
  )
}

export default App;