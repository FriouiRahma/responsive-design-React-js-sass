import React from 'react'
import { MenuItems } from './NavbarItems';
import logo from '../../icons/logo.png';
import menu from '../../icons/Burger Menu.png';

function Navbar() {
    return (
        <div className="wrapper-nav">
        <div className="container">
            <div className="navbar-items ">
                <img src={logo} className="LogoAleia" alt='logo' />
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => (

                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <img src={menu} className="menu" alt='logo' />
            </div>
        </div>
        </div>
    )
}

export default Navbar





