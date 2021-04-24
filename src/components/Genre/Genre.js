import React from 'react'
import { Link } from 'react-router-dom'

const Genre = ({ genre, plays }) => {

  const genreHeader = genre.substring(1).charAt(0).toUpperCase() + genre.substring(1).slice(1)

  return (
    <div>
      <h1>{genreHeader}</h1>
      {plays.map(el => {
        let url=`/${el.genre}/${el.playTitle}`
        return <Link to={url}><button>{el.fullTitle}</button></Link>
      })}
    </div>
  )

}

export default Genre;