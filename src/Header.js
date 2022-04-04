import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return <nav className='header'>
        
        
        {/*logo */}
    <Link to="/">
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon-logo'></img>
    </Link>
        
        {/* search */}

    <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
    </div>
 
        
        {/* links */}
        {/* basket */}

  </nav>;
  
}

export default Header