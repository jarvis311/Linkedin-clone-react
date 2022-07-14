import { Avatar } from '@mui/material'
import React from 'react'
import '../styles/sidebar.css'
// import { selectUser } from '../features/userSlice';
// import { useSelector } from 'react-redux';

const Sidebar = () => {

    // fetch user details from the redux store
    // const user = useSelector(selectUser)
    
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const photourl = localStorage.getItem('photourl');
    console.log(email);
    return (
        <div className='sidebar'>
            <div className="sidebarTop">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQHcILaeowY2kQ/profile-displaybackgroundimage-shrink_350_1400/0/1651467580018?e=1661990400&v=beta&t=ujddwIJHvaQMH-NpZjnrA4-O7g2hlTCnseLR2x5h2uo" alt='img'/>
                <Avatar src={photourl} className='sidebar_avatar'> {email[0]} </Avatar>
                <h2>{name}</h2>
                <h4>Student at Vishwakarma Goverment Engineering College</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viwes your profile</p>
                    <p className='sidebarView_number'>86</p>
                </div>
                <div className="sidebar_stat">
                    <p>Impression of your post</p>
                    <p className='sidebarView_number'>86</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <h4 className='sidebar_bottom_heading'>Recent</h4>
                <div className="sidebar_recentItem">
                    <p><span className='span-hash'>#</span>redux</p> 
                    <p><span className='span-hash'>#</span>react</p> 
                    <p><span className='span-hash'>#</span>cloud</p> 
                    
                </div>          
            </div>
        </div>
    )
}

export default Sidebar;