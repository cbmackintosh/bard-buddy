
import React from 'react'
import { Route, NavLink } from 'react-router-dom'


const App = () => {

  return (
    <main className='app'>
      <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/'>SAVED PASSAGES</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' />
        <Route path={['/tragedies', '/comedies', '/histories', 'sonnets']} />
        <Route path={['/tragedies/:play', 'comedies/:play', '/histoires/:play']} />
        <Route path='#' />
      </Switch>
    </main>
  )

}

export default App