import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Genre = ({ genre }) => {

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
  }, [])

  return (
    <div>
      {state.map(el => {
        let url=`/${el.genre}/${el.playTitle}`
        return <Link to={url}><button>{el.fullTitle}</button></Link>
      })}
    </div>
  )

}

export default Genre;