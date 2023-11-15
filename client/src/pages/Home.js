import React from 'react';
import Topbar from '../components/topbar/Topbar';
import SideBar from '../components/sidebar/SideBar';
import Feed from '../components/feed/Feed';
import RightBar from '../components/rightbar/RightBar';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='flex'>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}
