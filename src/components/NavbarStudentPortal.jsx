import React from 'react'
import { strathLogo } from '../assets'
import { Link } from 'react-router-dom'

const NavbarStudentPortal = () => {
  return (
    <div>
        <div className='bg-nav-blue w-full h-[5vw] flex'>
            <div className='bg-white pt-[0.6vw] pl-[2vw] w-[15vw]'>
                <Link to="/strathmore-ams/">
                    <img src={strathLogo} className='h-[4.1vw]' />
                </Link>
            </div>
            <div className="w-0 h-0 border-b-[5vw] border-b-transparent border-l-[3vw] border-l-white "></div>
        </div>
    </div>
  )
}

export default NavbarStudentPortal