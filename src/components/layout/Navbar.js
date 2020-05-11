import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <nav className = 'navbar bg-primary'> 
            <h1><i className={icon}></i>{title}</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    )
};

Navbar.defaultProps = {
    title: 'Professor Pokédex',
    icon: 'fas fa-fire'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar