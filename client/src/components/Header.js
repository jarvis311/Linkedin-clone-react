import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import LogoutIcon from '@mui/icons-material/Logout';
import { logout, selectUser } from '../features/userSlice';
import { Avatar } from '@mui/material';


const Header = () => {

 




  return (
    <div className='header'>
      <div className="header_left">
        <img className='header_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaWM9kwzGhplsxtRygvDNmZeTKOxPh3bVsm96qdOQMvUjen1BZSL5u5xmY3ZlE1BakNc&usqp=CAU" alt="" />
        <div className="header_search">
          <SearchIcon className='header_searchIcon' />
          <input placeholder='Serarch' type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleOutlineOutlinedIcon} title="My Netword" />
        <HeaderOption Icon={WorkIcon} title="Job" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notification" />
        {/* <Avatar className='headerOption_icon headerOption' src={user?.photoUrl}>{user?.email[0]}</Avatar> */}
        {/* <LogoutIcon className='headerOption_icon headerOption' onClick={handleLogout}>Logout</LogoutIcon> */}


      </div>
    </div>
  )
}

export default Header