import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import Background from '../components/Background'
import Calendar from 'react-calendar'

const Mentorship = () => {
  return (
    <div>
        <div>
            <NavbarStudentPortal />
            <SidePanel />
            <Background />

            <div className='absolute w-[65vw] pb-[1vw] bg-white left-[25vw] top-[7vw] rounded-[0.7vw] pt-[1vw] flex justify-center'>
                <div>
                    <div>
                        <h1 className='text-[1.3vw] text-center text-strathmore-red font-bold'>
                            Mentorship Sessions Log
                        </h1>

                        <div className='w-[63vw] h-[0.1vw] mb-[1vw] bg-custom-light-grey'></div>

                        <div className='flex'>
                            <div className='w-[45vw] h-[30vw] bg-light-purple rounded-[1vw]'>
                                <div className='flex justify-center cursor-pointer'>
                                    <p className='py-[0.4vw] w-[10vw] rounded-t-[0.5vw] text-center text-strathmore-blue font-semibold'>
                                        General Attendance
                                    </p>                                
                                </div>

                                <div className='flex justify-center'>
                                    <div className='w-[30vw] h-[0.1vw] mb-[1vw] bg-custom-light-grey'></div>
                                </div>

                                <div className='flex justify-center'>
                                    <div className='absolute'>
                                        <p className='text-[3vw] text-center font-bold text-strathmore-red'>
                                            10+
                                        </p>

                                        <p className='text-custom-grey font-semibold text-[1vw]'>
                                            Total Hours Spent
                                        </p>
                                    </div>

                                    <div className='absolute ml-[28vw]'>
                                        <p className='text-[3vw] text-center font-bold text-strathmore-red'>
                                            5
                                        </p>

                                        <p className='text-custom-grey font-semibold text-[1vw]'>
                                            Sessions Missed
                                        </p>
                                    </div>

                                    <div className='absolute ml-[-28vw]'>
                                        <p className='text-[3vw] text-center font-bold text-strathmore-red'>
                                            3
                                        </p>

                                        <p className='text-custom-grey font-semibold text-[1vw]'>
                                            Sessions Attended
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

                            <div>
                                <Calendar className='text-[1vw] w-[16vw] ml-[1vw] rounded-[1vw] bg-light-purple h-[12vw]' />

                                <div className='w-[16vw] pt-[0.7vw] bg-strathmore-red h-[16vw] ml-[1vw] rounded-[1vw] mt-[1vw] text-white'>
                                    <p className='text-center text-[1.1vw] mb-[1vw]'>
                                        Mentorship Sessions
                                    </p>

                                    <div className='w-[15vw] h-[4vw] flex ml-[0.5vw]'>
                                        <div className='text-end w-[2.9vw] font-semibold text-[1.1vw]'>
                                            <p>
                                                08:00
                                            </p>

                                            <p className='mt-[-0.3vw] opacity-60'>
                                                Thur
                                            </p>
                                        </div>

                                        <div className='w-[0.05vw] ml-[0.5vw] h-[3vw] bg-white'></div>

                                        <div>
                                            <p className='text-[0.9vw] ml-[0.5vw] font-semibold'>
                                                COMMERCIAL LAW
                                            </p>

                                            <p className='bg-white ml-[0.5vw] mt-[0.4vw] text-strathmore-red text-[0.6vw] text-center font-bold w-[3vw] rounded-[0.5vw]'>
                                                LESSON
                                            </p>
                                        </div>
                                    </div>

                                    <div className='w-[15vw] h-[4vw] flex ml-[0.5vw]'>
                                        <div className='text-end w-[2.9vw] font-semibold text-[1.1vw]'>
                                            <p>
                                                08:00
                                            </p>

                                            <p className='mt-[-0.3vw] opacity-60'>
                                                Thur
                                            </p>
                                        </div>

                                        <div className='w-[0.05vw] ml-[0.5vw] h-[3vw] bg-white'></div>

                                        <div>
                                            <p className='text-[0.9vw] ml-[0.5vw] font-semibold'>
                                                CONFLICT OF LAWS
                                            </p>

                                            <p className='bg-strathmore-yellow ml-[0.5vw] mt-[0.4vw] text-strathmore-red text-[0.6vw] text-center font-bold w-[3vw] rounded-[0.5vw]'>
                                                LESSON
                                            </p>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>                 

                    <div className='text-center text-white mt-[1vw]'>
                        <div className='bg-strathmore-yellow inline-block py-[0.5vw] px-[1vw] rounded-[1.5vw] cursor-pointer'>
                            <p>
                                BOOK SESSION
                            </p>
                        </div>
                    </div>
                </div>            
            </div>            
        </div>
    </div>
  )
}

export default Mentorship