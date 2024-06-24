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

                <div className='w-[63vw] h-[0.1vw] mb-[1vw] bg-custom-light-grey'></div>

                <div className='w-[45vw] h-[30vw] bg-light-purple rounded-[1vw]'>
                    <div className='flex justify-center cursor-pointer'>
                        <p className='py-[0.4vw] w-[10vw] bg-strathmore-yellow rounded-t-[0.5vw] text-center text-strathmore-red font-semibold'>
                            Today's Attendance
                        </p>

                        <p className='py-[0.4vw] w-[12vw] text-strathmore-blue hover:bg-strathmore-yellow rounded-t-[0.5vw] text-center hover:text-strathmore-red font-semibold'>
                            General Attendance
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-[30vw] h-[0.1vw] mb-[1vw] bg-custom-light-grey'></div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='absolute'>
                            <p className='text-[3vw] text-center font-bold text-strathmore-red'>
                                6+
                            </p>

                            <p className='text-custom-grey font-semibold text-[1vw]'>
                                Total Hours Spent
                            </p>
                        </div>

                        <div className='absolute ml-[28vw]'>
                            <p className='text-[3vw] text-center font-bold text-strathmore-red'>
                                1
                            </p>

                            <p className='text-custom-grey font-semibold text-[1vw]'>
                            Classes Missed
                            </p>
                        </div>

                        <div className='absolute ml-[-28vw]'>
                            <p className='text-[3vw] text-center font-bold text-strathmore-red'>
                                3
                            </p>

                            <p className='text-custom-grey font-semibold text-[1vw]'>
                                Classes Attended
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center mt-[8vw]'>
                        <p className='text-[1.2vw] text-strathmore-blue font-semibold'>
                            Attendance Overview
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-[30vw] h-[0.1vw] mb-[1vw] bg-custom-light-grey'></div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Attendance