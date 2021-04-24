
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';

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
        <Route path={['/tragedies', '/comedies', '/histories', 'sonnets']} />
        <Route path={['/tragedies/:play', 'comedies/:play', '/histoires/:play']} />
        <Route path='#' />
      </Switch>
    </main>
  )

}

export default App