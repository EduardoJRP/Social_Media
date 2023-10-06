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

        </div>
        <div className='postBottom'>

        </div>
      </div>
    </div>
  )
}
