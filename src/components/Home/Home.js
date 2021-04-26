import React from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../HomeBanner/HomeBanner'
import './Home.css'

const Home = () => {

  return(
    <div className='home'>
      <HomeBanner />
      <div className='home-menu'>
        <Link to='/histories'><button className='home-button'>HISTORIES</button></Link>
        <Link to='/tragedies'><button className='home-button'>TRAGEDIES</button></Link>
        <Link to='/comedies'><button className='home-button'>COMEDIES</button></Link>
        <Link to='/sonnets'><button className='home-button'>SONNETS AND POEMS</button></Link>
      </div>     
    </div>
  )
}

export default Home;