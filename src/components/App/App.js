
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Genre from '../Genre/Genre'

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
        <Route path={['/tragedies', '/comedies', '/histories']} render={({ match }) => <Genre genre={match.path} /> } />
        <Route path={['/tragedies/:play', 'comedies/:play', '/histoires/:play']} />
        <Route path='#' />
      </Switch>
    </main>
  )

}

export default App