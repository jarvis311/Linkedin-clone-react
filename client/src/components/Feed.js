
import React, { useEffect, useState } from 'react'
import '../styles/feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import FeedPost from './FeedPost';
// import { selectUser } from '../features/userSlice';
// import { useSelector } from 'react-redux';

import FlipMove from 'react-flip-move'
import axios from 'axios';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const Feed = () => {
   
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState('')
    // const user = useSelector(selectUser)
    const name = localStorage.getItem('name');
    const photourllocal = localStorage.getItem('photourl');


    const onsubmit = (e) => {
        e.preventDefault()
        try {
            const createFeed = {
               post,
               username: name,
               photourl: photourllocal
            }
            const sendPost = async () => {
                const response = await axios.post('http://localhost:5000/post', createFeed)
                console.log(response);
            }
            sendPost();
        } catch (error) {
            console.log(error);
        }
        setPost("");
    };

    useEffect(()=>{
        const getPost = async () => {
            const response = await axios.get('http://localhost:5000/post')
            console.log(response.data);
            setPosts(response.data)
        }
        getPost();
    },[])

   
    return (
        <div className='feed'>
            <div className="fedd_postCreator">
                <div className="feddInput">
                    <CreateIcon />
                    <form>
                        <input value={post} onChange={(e) => setPost(e.target.value)}  type="text" placeholder='Start a post' />
                        <button onClick={onsubmit} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#378FE9" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#5F9B41" />
                    <InputOption Icon={EventIcon} title="Event" color="#C37D16" />
                    <InputOption Icon={ArticleIcon} title="Event" color="#E16745" />
                </div>
            </div>
            <FlipMove>

            {
                posts.map(({_id,post, username, photourl})=> (
                    <FeedPost 
                        key={_id}
                        name={username}
                        description={post}
                        workAt="institude"
                        photourl={photourl}
                        timestamp="7h ago"
                    />
                ))
            }
            </FlipMove>

        </div>
    )
}

export default Feed