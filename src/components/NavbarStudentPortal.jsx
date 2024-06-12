import React from 'react'
import { strathLogo, bellIcon, me, downArrow } from '../assets'
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

        <div className='absolute right-[1.5vw] top-[1vw] flex text-white gap-[0.95vw]'>
          <div className='flex gap-[0.8vw] mt-[0.8vw]'>
            {/* <div onClick={() => setIsNotificationVisible(!isNotificationVisible)}>
              <img src={bellIcon} className='h-[1.5vw] cursor-pointer' />

              <div className='w-[0.5vw] h-[0.5vw] bg-red-600 mt-[-1.4vw] ml-[0.8vw] rounded-[3vw] z-10'></div>
            </div>             */}
          </div>

          <div className='flex gap-[0.5vw] cursor-pointer'>
            {/* <img src={me} className='h-[3vw] rounded-[2vw]' /> */}
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
  )
}

export default NavbarStudentPortal