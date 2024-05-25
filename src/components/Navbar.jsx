import React from 'react'
import { strathLogo } from '../assets'

const Navbar = () => {
  return (
    <div className='bg-nav-blue w-full'>
        <div className='flex'>
            <div className='bg-white pt-[0.6vw] pl-[2vw] w-[20vw]'>
                <img src={strathLogo} className='h-[4.1vw]' />
            </div>
            <div class="w-0 h-0 border-b-[5vw] border-b-transparent border-l-[3vw] border-l-white "></div>
        </div>
    </div>
  )
}

export default Navbar