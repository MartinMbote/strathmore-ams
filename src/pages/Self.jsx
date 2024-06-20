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
        
        <div>
          <div className='absolute left-[20vw] top-[20vw] w-[70vw] pt-[0.5vw] bg-white flex justify-center rounded-[1vw]'>
            <div>
              <p className='font-bold text-[1.2vw] mb-[1vw] text-center text-strathmore-red'>
                ACADEMIC PROGRAMES
              </p>

              <table className='text-center text-[1vw] mb-[2.5vw]'>
                <tr className='bg-strathmore-yellow text-strathmore-blue'>
                  <th className='border-white border-[0.2vw] w-[15vw]'>PROGRAMME/S</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>SYLLABUS</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>STATUS</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>YEAR</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>GRADE</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>REMARKS</th>
                </tr>

                <tr className='bg-custom-grey text-white'>
                  <td className='border-white border-[0.2vw]'>Bachelor of Law, LLB</td>
                  <td className='border-white border-[0.2vw]'>LLB</td>
                  <td className='border-white border-[0.2vw]'>INTERRUPTED</td>
                  <td className='border-white border-[0.2vw]'>2022</td>
                  <td className='border-white border-[0.2vw]'>N/A</td>
                  <td className='border-white border-[0.2vw]'>N/A</td>
                </tr>

                <tr className='bg-custom-light-grey'>
                  <td className='border-white border-[0.2vw]'>Bachelor of Law, LLB</td>
                  <td className='border-white border-[0.2vw]'>LLB</td>
                  <td className='border-white border-[0.2vw]'>INTERRUPTED</td>
                  <td className='border-white border-[0.2vw]'>2022</td>
                  <td className='border-white border-[0.2vw]'>N/A</td>
                  <td className='border-white border-[0.2vw]'>N/A</td>
                </tr>
              </table>

              <p className='font-bold text-[1.2vw] mb-[1vw] text-center text-strathmore-red'>
                MENTORING
              </p>

              <table className='text-center text-[1vw] mb-[2.5vw] ml-[9vw]'>
                <tr className='bg-strathmore-yellow text-strathmore-blue'>
                  <th className='border-white border-[0.2vw] w-[15vw]'>MENTOR/S</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>EMAIL</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>LAST SESSION</th>
                  <th className='border-white border-[0.2vw] w-[10vw]'>REMARKS</th>                
                </tr>

                <tr className='bg-custom-grey text-white'>
                  <td className='border-white border-[0.2vw]'>Michael Keaton</td>
                  <td className='border-white border-[0.2vw]'>michael@strathmore.edu</td>
                  <td className='border-white border-[0.2vw]'>06-03-2023</td>
                  <td className='border-white border-[0.2vw]'>Drop Down Option</td>                
                </tr>              
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Self