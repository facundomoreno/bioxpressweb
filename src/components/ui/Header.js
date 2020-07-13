import React from 'react'
import logo from '../../logo.png'
import './Header.css'
import {Link, useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <div>
        <header className="app-header">
            <Link  onClick={()=>history.push("/home")}><img alt="header-img" src={logo} className="app-logo"></img></Link>
        </header>
        </div>
    )
}

export default Header
