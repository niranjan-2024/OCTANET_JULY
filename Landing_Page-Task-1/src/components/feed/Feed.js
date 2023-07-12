import React from 'react'
import "./Feed.scss"
import Post from '../post/Post'
import Follower from '../follower/Follower'

function Feed() {
  return (
    <div className='Feed'>
        <div className="container">
            <div className="left-part scrollable-content" >
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <div className="right-part">
                <div className="following">
                    <h3 className='title'>You are Following</h3>
                    <Follower/>
                    <Follower/>
                    <Follower/>
                    <Follower/>
                </div>

                <div className="following">
                    <h3 className='title'>Suggested For You</h3>
                    <Follower/>
                    <Follower/>
                    <Follower/>
                    <Follower/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Feed