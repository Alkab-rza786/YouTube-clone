import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notificationn from '../../assets/notification.png'
import jack from '../../assets/jack.png'
import { Link } from 'react-router-dom'


function Navbar({ setSidebar }) {
    return (
        <nav className='navbar'>
            <div className="nav-left">
                <img src={menu_icon} alt="" className="menu" onClick={() => setSidebar(prev => !prev)} />
                <Link to='/' > <img src={logo} alt="" className="logo" /></Link>
            </div>

            <div className="nav-middle">
                <div className="nav-search">
                    <input type="text" placeholder='Search' />
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="nav-right">
                <img src={upload} alt="" />
                <img src={more} alt="" />
                <img src={notificationn} alt="" />
                <img src={jack} alt="" className='jack-img' />
            </div>

        </nav>
    )
}

export default Navbar
