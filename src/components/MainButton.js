import React from 'react'
import { Link } from 'react-router-dom'

const MainButton = () => {
  return (
    <Link to='/register' className='button' style={{backgroundImage: "url('/images/btn-bg.png')"}}>
        Register
    </Link>
  )
}

export default MainButton