import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import PropTypes from 'prop-types'

const Error = ({ error }) => {
  console.log(typeof error)
  if (error < 500) {
    return (
      <div className='error-container'>
        <h2 className='error-header'>This page doth not exist, or hath moved</h2>
        <Link to='/'><button className='error-button'>BACK</button></Link>
      </div>
    )
  } else {
    return (
      <div className='error-container'>
        <h2 className='error-header'>Zounds! There was a problem with our system. Pray, try again later.</h2>
        <Link to='/'><button className='error-button'>BACK</button></Link>
      </div>
    )
  }

}

export default Error

Error.propTypes = {
  error: PropTypes.number
}