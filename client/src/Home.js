import React, { useContext } from 'react'
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';


const Home = () => {

    return (
            <div className="app_content">
            <Sidebar />
            <Feed />
            <Widgets />
            </div>
    )
}

export default Home