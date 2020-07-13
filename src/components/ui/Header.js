import React from 'react'
import logo from '../../logo.png'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <header className="app-header">
            <Link to='/home'><img src={logo} className="app-logo"></img></Link>
        </header>
        </div>
    )
}

export default Header
