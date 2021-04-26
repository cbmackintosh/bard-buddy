import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Genre.css'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

const Genre = ({ genre }) => {

  const genreHeader = genre.substring(1).charAt(0).toUpperCase() + genre.substring(1).slice(1)

  const [state, setState] = useState([])
  const [error, setError] = useState('')

  const getPlaysByGenre = async () => {
    const url = `https://bard-buddy-api.herokuapp.com/allTitles${genre}`
    setError('')

    try {
      const response = await fetch(url)
      const data = await response.json()
      setState(data)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getPlaysByGenre()
  })

  return (
    <div className='genre-body'>
      <h1>{genreHeader}</h1>
      {error && <Error />}
      <div className='genre-works'>
        {state.map(el => {
          let url=`/${el.genre}/${el.playTitle}`
          return <Link to={url} key={`play=${el.playTitle}`}><button className='genre-work'>{el.fullTitle}</button></Link>
        })}
      </div>   
    </div>
  )

}

export default Genre;

Genre.propTypes = {
  genre: PropTypes.string
}