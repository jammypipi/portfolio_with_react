import React, { useState } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdViewList } from 'react-icons/md';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const Data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    const handleMenuItemClick = () => {
        // Add any specific behavior you want to happen when a menu item is clicked on mobile
        // For example, you can close the menu by setting toggleIcon to false:
        setToggleIcon(false);
    };

    return (
        <div>
            <nav className="navbar">

                <div className="navbar_container">
                    <Link to={'/'} className="navbar_container_logo">
                        <a href="https://www.linkedin.com/in/thirimaythu" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={45} />
                        </a>
                        <a href="https://github.com/throlinepipi" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={45} />
                        </a>
                    </Link>
                </div>

                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ' '} `}>
                    {
                        Data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link className="navbar_container_menu_item_links" to={item.to} onClick={handleMenuItemClick}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <MdViewList size={40} />
                    }
                </div>

            </nav>
        </div>
    )
}

export default Navbar;