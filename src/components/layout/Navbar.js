import React from 'react'
// importing proptype with impt Enter Key
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({ icon, title }) => {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={ icon }></i> { title }
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    )
  }

  // declaring default props
  Navbar.defaultProps = {
    title: 'Github Dev Search',
    icon: 'fab fa-github'
  };

  // implemting proptype
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
  }


export default Navbar
