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
                    <input placeholder='Email' className='h-12 rounded-xl border-2 border-solid border-gray-400 pl-5 text-lg focus:outline-none'/>
                    <input placeholder='Password' className='h-12 rounded-xl border-2 border-solid border-gray-400 pl-5 text-lg focus:outline-none'/>
                    <button className='h-12 cursor-pointer rounded-xl border-none bg-blue-700 text-xl font-medium text-white'>Log In</button>
                    <span className='text-center text-blue-600'>Forgot Password?</span>
                    <button className='h-12 w-3/5 cursor-pointer self-center rounded-xl border-none bg-green-500 text-xl font-medium text-white'>Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
