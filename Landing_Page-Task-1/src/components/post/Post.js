import React from 'react'
import "./Post.scss"
import Avatar from '../avatar/Avatar'
import dummyPostImg from "../../assets/nature.jpg";
import {AiOutlineHeart} from 'react-icons/ai';

function Post({post}) {
  return (
    <div className='Post'>
        <div className="heading">
            <Avatar/>
            <h4>Rahul Sharma</h4>
        </div>
        <div className="content">
            <img src={dummyPostImg} alt="post-img" />
        </div>
        <div className="footer">
            <div className="likes">
                <AiOutlineHeart className='icon'/>
                <h4>4 likes</h4>
            </div>
            <p className='caption'>This is nature Lorem impsum , random text</p>
            <h6 className='time-ago'>4 hrs ago</h6>
        </div>
    </div>
  )
}

export default Post