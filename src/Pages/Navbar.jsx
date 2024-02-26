import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <Link to='/' className='logo'>
                    <img src="https://sisgain.com/project/astrodevam/assets/icons/logo.png" alt="" /> <h4>Astrodevam</h4>
                </Link>
                <span>
                    <NotificationsIcon/>
                </span>
            </header>
        </>
    )
}

export default Navbar;