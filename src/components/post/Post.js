import React from 'react';
import { MoreVert } from '@mui/icons-material';
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImage' src='/assets/person/person1.png' alt=''/>
            <span className='postUsername'>Someone</span>
            <span className='postDate'>5 min ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hey! It's my first post</span>
          <img className="postImage" src="/assets/post/post1.png" alt=''/>
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='/assets/like.png' alt=''/>
            <img className='likeIcon' src='/assets/heart.png' alt=''/>
            <span>32 people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
