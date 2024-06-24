import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import Background from '../components/Background'

const Attendance = () => {
  return (
    <div>
        <NavbarStudentPortal />
        <SidePanel />
        <Background />

        <div className='absolute left-[17vw] top-[7vw] rounded-[20vw] w-[14vw] h-[14vw] pt-[2.2vw] bg-white text-center'>       
          <p className='text-green font-bold text-[4vw]'>
            95%
          </p>

          <p className='text-[1vw] mt-[-0.5vw] font-semibold text-strathmore-blue'>
            GENERAL ATTENDANCE
          </p>

          <p className='text-[1vw]'>
            Year 4 Semester 1 - 2023
          </p>
        </div>

        <div className='absolute w-[65vw] pb-[1vw] bg-white left-[33.5vw] top-[7vw] rounded-[0.7vw] pt-[1vw] flex justify-center'>
            <div>
                <h1 className='text-[1.3vw] text-center text-strathmore-red font-bold'>
                    CLASS ATTENDANCE
                </h1>

                <div className='w-[40vw] h-[0.1vw] bg-custom-light-grey'></div>
            </div>
        </div>
    </div>
  )
}

export default Attendance