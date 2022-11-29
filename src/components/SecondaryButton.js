import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryButton = () => {
  return (
    <Link to='/register' className='secondary-btn' style={{backgroundImage: "url('/images/small-btn-bg.png')"}}>
        Register
    </Link>
  )
}

export default SecondaryButton