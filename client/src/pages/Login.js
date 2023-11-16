import React from 'react'

export default function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-slate-100'>
        <div className='flex h-4/6 w-4/6'>
            <div className='flex flex-1 flex-col justify-center'>
                <h3 className='mb-10 text-5xl font-extrabold text-blue-700'>Connect</h3>
                <span className='text-xl'>
                    Connect with friends around the world
                </span>
            </div>
            <div className='flex flex-1 flex-col justify-center'>
                <div className='flex h-96 flex-col justify-between rounded-xl bg-white p-10'>
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
