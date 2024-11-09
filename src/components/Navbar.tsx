import React from 'react'
import { Lock } from 'react-feather'
import { LogOut } from 'react-feather'
import "../styles/Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='upper-navbar'>
            <p>Site Administration/<b>Utenti</b></p>
            <div className='navbar-log-out'>
                <Lock opacity={0.7}/>
                <LogOut opacity={0.7}/>
            </div>
        </div>
        <div className='lower-navbar'>
            <div className='navbar-user'>
                <img src="icons/profile_placeholder.png" alt="Profile" className='navbar-user__image' />
                <div>
                    <p>Welcome</p>
                    <b>Sandra Mondani</b>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar