import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return(
    <div className='home'>
      <Link to='/histories'><button>HISTORIES</button></Link>
      <Link to='/tragedies'><button>TRAGEDIES</button></Link>
      <Link to='/comedies'><button>COMEDIES</button></Link>
      <Link to='/sonnets'><button>SONNETS</button></Link>
    </div>
  )
}

export default Home;