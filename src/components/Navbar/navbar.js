import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import PhoneIcon from '@mui/icons-material/Phone';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='destopMenu'>
            <Link className='destopMenuListItem'>Home</Link>
            <Link className='destopMenuListItem'>About</Link>
            <Link className='destopMenuListItem'>Portfolio</Link>
        </div>
        <button className="btn" style={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon style={{ marginRight: '8px' }} />
          Contact me
        </button>
    </nav>
  )
}

export default NavBar;