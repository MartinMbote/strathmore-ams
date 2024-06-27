import React from 'react'
import { strathLogo, bellIcon, me, downArrow } from '../assets'
import { Link } from 'react-router-dom'

const NavbarStudentPortal = () => {
  return (
    <div>
        <div className='bg-nav-blue w-full fixed z-20 h-[5vw]'>
            <div className='flex'>
              <div className='bg-white pt-[0.6vw] pl-[2vw] w-[15vw]'>
                  <Link to="/strathmore-ams/">
                      <img src={strathLogo} className='h-[4.1vw]' />
                  </Link>
              </div>
              <div className="w-0 h-0 border-b-[5vw] border-b-transparent border-l-[3vw] border-l-white "></div>
            </div>

            <div className='absolute right-[1.5vw] top-[1vw] flex text-white gap-[0.95vw]'>
              <div className='flex gap-[0.5vw] cursor-pointer'>            
                <div>
                  <div className='w-[0.65vw] h-[0.65vw] ml-[2.1vw] bg-white absolute rounded-[1vw] border-strathmore-red border-[0.15vw]'></div>

                  <img src={me} className='h-[3vw] rounded-[2vw]' />
                </div>

                <div className='text-white text-[0.9vw] font-semibold flex gap-[0.2vw] mt-[0.7vw]'>
                  <p>
                    MRTN
                  </p>

                  <img src={downArrow} className='h-[0.9vw] mt-[0.34vw]' />
                </div>
              </div>
            </div>
        </div>

        
    </div>
  )
}

export default NavbarStudentPortal