import React from 'react';
import Topbar from '../components/topbar/Topbar';
import SideBar from '../components/sidebar/SideBar';
import Feed from '../components/feed/Feed';
import RightBar from '../components/rightbar/RightBar';


export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className='flex'>
        <SideBar />
        <div className='flex-1'>
            <div className='items-center'>
                <div className='relative h-96'>
                    <img className='h-72 w-full object-cover' src={`${PF}/post/post3.png`} alt=''/>
                    <img className='absolute inset-x-0 top-64 m-auto h-24 w-24 rounded-full border-2 border-solid border-white object-cover' src={`${PF}/person/person6.png`} alt=''/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='text-3xl'>Someone</h4>
                    <span className='font-light'>Hello World!</span>
                </div>
            </div>
            <div className='flex'>
                <Feed />
                <RightBar profile/>
            </div>
        </div>
      </div>
    </>
  )
}
