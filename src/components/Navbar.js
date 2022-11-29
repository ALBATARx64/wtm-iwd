import React from 'react'
import { Link } from 'react-router-dom'
import SecondaryButton from './SecondaryButton'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="container">
            <header>
                <Link to='/'>
                    <img src="/images/wtm-logo.png" alt="WTM logo" />
                </Link>

                <ul>
                    <li className='active'>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Agenda</Link>
                    </li>
                    <li>
                        <Link>Speakers</Link>
                    </li>
                    <li>
                        <Link>Sponsors</Link>
                    </li>
                </ul>

                <SecondaryButton />
            </header>        
        </div>
    </nav>
  )
}

export default Navbar