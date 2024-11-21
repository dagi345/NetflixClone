import React from 'react'
import './header.css'
import Netflix_logo from '../../assets/images/Netflix_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <section>
        <div className="header">
            <div className="header_links">
                <ul>
                    <li><a href="/"><img src= {Netflix_logo} alt="an image of netflix "/></a></li>
                    <li className='header_links_links'>Home</li>
                    <li className='header_links_links'>Tv shows</li>
                    <li className='header_links_links'>Movies</li>
                    <li className='header_links_links'>Latest</li>
                    <li className='header_links_links'>My list</li>
                    <li className='header_links_links'>Languages</li>
                </ul>
        
            </div>

            <div className="header_button_links">
                <ul  >
                    <li  className= "header_button_links_icons" >
                        <SearchIcon />
                    </li >

                    <li className= "header_button_links_icons">
                        <NotificationsNoneIcon />
                    </li >

                    <li className= "header_button_links_icons">
                        <AccountBoxIcon />
                    </li>
                    
                    <li className= "header_button_links_icons">
                        <ExpandMoreIcon />
                    </li>
                </ul>

                <MenuIcon className='menu_icon'/>
                
            </div>
        </div>
    </section>
  )
}

export default Header