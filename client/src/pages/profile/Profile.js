import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import SideBar from '../../components/sidebar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import "./profile.css";


export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <SideBar />
        <div className='profileRight'>
            <div className='profileRightTop'>
                <div className='profileCover'>
                    <img className='profileCoverImage' src='assets/post/post3.png' alt=''/>
                    <img className='profileUserImage' src='assets/person/person6.png' alt=''/>
                </div>
                <div className='profileInfo'>
                    <h4 className='profileInfoName'>Someone</h4>
                    <span className='profileInfoDescription'>Hello World!</span>
                </div>
            </div>
            <div className='profileRightBottom'>
                <Feed />
                <RightBar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
