import React from 'react';
import './navbar.css';
import PhoneIcon from '@mui/icons-material/Phone';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='destopMenu'>
            <a className='destopMenuListItem' href='#intro' >Home</a>
            <a className='destopMenuListItem' href='#skills' >About</a>
            <a className='destopMenuListItem'href='#work' >Portfolio</a>
        </div>
        
        <button className="btn" style={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon style={{ marginRight: '8px' }} />
          <a className='contact-text' href='#contact'>Contact me</a>
        </button>
    </nav>
  )
}

export default NavBar;