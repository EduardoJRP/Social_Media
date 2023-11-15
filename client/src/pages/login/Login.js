import React from 'react';
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Connect</h3>
                <span className='loginDescription'>
                    Connect with friends around the world
                </span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Email' className='h-12 rounded-xl border-2 border-solid border-gray-400 text-lg pl-5 focus:outline-none'/>
                    <input placeholder='Password' className='h-12 rounded-xl border-2 border-solid border-gray-400 text-lg pl-5 focus:outline-none'/>
                    <button className='h-12 rounded-xl border-none bg-blue-700 text-white text-xl font-medium cursor-pointer'>Log In</button>
                    <span className='text-center text-blue-600'>Forgot Password?</span>
                    <button className='w-3/5 self-center h-12 rounded-xl border-none bg-green-500 text-white text-xl font-medium cursor-pointer'>Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
