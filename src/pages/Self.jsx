import React from 'react'
import SidePanel from '../components/SidePanel'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import Background from '../components/Background'

function Self() {
  return (
    <div>
        <NavbarStudentPortal />
        <SidePanel />
        <Background />

        <div className='absolute left-[20vw] top-[7vw] w-[70vw] pt-[2vw] bg-white flex justify-center rounded-[1vw] pb-[3vw]'>
          <div>
            <p className='font-bold text-[1.2vw] mb-[0.3vw] text-center text-strathmore-red'>
              SELF REGISTRATION
            </p>

            <div className='w-[40vw] h-[0.1vw] mb-[1vw] bg-custom-grey'></div>

            <div className='text-white text-[1vw] flex'>
              <div className='w-[10vw] py-[0.2vw] text-end pr-[0.5vw] bg-strathmore-red'>
                <p>Student No.</p>
              </div>

              <div className='w-[7vw] py-[0.2vw] text-center pr-[0.5vw] bg-strathmore-blue'>
                <p>
                  028474
                </p>
              </div>

              <div className='w-[10vw] py-[0.2vw] text-end pr-[0.5vw] bg-strathmore-red'>
                <p>Student Name</p>
              </div>

              <div className='w-[12vw] py-[0.2vw] text-center pr-[0.5vw] bg-strathmore-blue'>
                <p>
                  Martin Maina
                </p>
              </div>
            </div>

            <div className='text-white text-[1vw] mt-[0.05vw] flex'>
              <div className='w-[10vw] py-[0.2vw] text-end pr-[0.5vw] bg-strathmore-red'>
                <p>Syllabus</p>
              </div>

              <div className='w-[7vw] py-[0.2vw] text-center pr-[0.5vw] bg-strathmore-blue'>
                <p>
                LLB
                </p>
              </div>

              <div className='w-[10vw] py-[0.2vw] text-end pr-[0.5vw] bg-strathmore-red'>
                <p>Student Year</p>
              </div>

              <div className='w-[12vw] py-[0.2vw] text-center pr-[0.5vw] bg-strathmore-blue'>
                <p>
                  4
                </p>
              </div>
            </div>

            <div className='text-white text-[1vw] mt-[0.05vw] flex'>
              <div className='w-[10vw] py-[0.2vw] text-end pr-[0.5vw] bg-strathmore-red'>
                <p>Registration Status</p>
              </div>

              <div className='w-[7vw] py-[0.2vw] text-center pr-[0.5vw] bg-green'>
                <p>
                OPEN
                </p>
              </div>

              <div className='w-[10vw] py-[0.2vw] text-end pr-[0.5vw] bg-strathmore-red'>
                <p>Intake Year</p>
              </div>

              <div className='w-[12vw] py-[0.2vw] text-center pr-[0.5vw] bg-strathmore-blue'>
                <p>
                2019
                </p>
              </div>
            </div>
          </div>          
        </div>
        
        <div>
          <div className='absolute left-[20vw] top-[22vw] w-[70vw] py-[2vw] bg-white flex justify-center rounded-[1vw]'>
            <div>
              <div className='flex cursor-pointer'>
                <p className='py-[0.4vw] w-[10vw] bg-strathmore-yellow rounded-t-[0.5vw] text-center text-strathmore-red font-semibold'>
                  REGISTER
                </p>

                <p className='py-[0.4vw] w-[12vw] text-strathmore-blue hover:bg-strathmore-yellow rounded-t-[0.5vw] text-center hover:text-strathmore-red font-semibold'>
                  REGISTERED UNITS
                </p>
              </div>

              <div className='w-full h-[0.07vw] mb-[0.5vw] bg-custom-grey'></div>

              <table className='text-center text-[1vw]'>
                <tr className='bg-strathmore-yellow text-strathmore-blue'>
                  <th className='border-white border-[0.2vw] w-[15vw]'>SUBJECT CODE</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>NAME</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>CREITS</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>GROUP</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>STATUS</th>                  
                </tr>

                <tr className='bg-custom-grey text-white'>
                  <td className='border-white border-[0.2vw]'>LPL 401</td>
                  <td className='border-white border-[0.2vw]'>DISSERTATION WRITING I </td>
                  <td className='border-white border-[0.2vw]'>-</td>
                  <td className='border-white border-[0.2vw]'>DROP DOWN</td>
                  <td className='border-white border-[0.2vw]'>REGISTER</td>
                </tr>

                <tr className='bg-custom-light-grey'>
                  <td className='border-white border-[0.2vw]'>LPR 401</td>
                  <td className='border-white border-[0.2vw]'>JURISPRUDENCE</td>
                  <td className='border-white border-[0.2vw]'>-</td>
                  <td className='border-white border-[0.2vw]'>DROP DOWN</td>
                  <td className='border-white border-[0.2vw]'>REGISTERED</td>
                </tr>
              </table>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Self