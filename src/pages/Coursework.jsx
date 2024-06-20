import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import Background from '../components/Background'

const Coursework = () => {
  return (
    <div>
        <NavbarStudentPortal />
        <SidePanel />
        <Background />

        <div className='absolute left-[20vw] top-[7vw] w-[70vw] py-[2vw] bg-white flex justify-center rounded-[1vw]'>
            <div>
                <div className='w-full h-[0.07vw] mb-[0.5vw] bg-custom-grey'></div>

                <table className='text-center text-[1vw]'>
                    <tr className='bg-strathmore-red text-white'>
                        <th className='border-white border-[0.2vw] w-[60vw] py-[0.5vw] text-start' colspan="5">
                            <span className='ml-[0.8vw]'>
                                ACADEMIC YEAR: 20222-2023
                            </span>

                            <span className='ml-[9vw]'>
                                Semester 1: Annual
                            </span>
                        </th>                                          
                    </tr>

                    <tr className='bg-strathmore-yellow font-semibold text-strathmore-blue'>
                        <td className='border-white border-[0.2vw] w-[30vw]' rowSpan="2" colSpan="2">Subject</td>
                        <td className='border-white border-[0.2vw] w-[15vw]' colSpan="2">Ordinary Exams</td>                        
                        <td className='border-white border-[0.2vw] w-[15vw]' colSpan="2">Supplementary Exams</td>                                               
                    </tr>

                    <tr className='bg-strathmore-yellow font-semibold text-strathmore-blue'>
                        <td className='border-white border-[0.2vw]' >Attempt no.</td>
                        <td className='border-white border-[0.2vw]'>Mark</td>
                        <td className='border-white border-[0.2vw]'>Attempt no. </td>
                        <td className='border-white border-[0.2vw]'>Mark</td>                        
                    </tr>

                    <tr className='bg-custom-grey text-white font-semibold'>
                        <td className='border-white border-[0.2vw] text-start pl-[1vw]' colSpan="2">Community-Based Assessment </td>
                        <td className='border-white border-[0.2vw]'>1</td>
                        <td className='border-white border-[0.2vw] bg-green'>90</td>
                        <td className='border-white border-[0.2vw]'>-</td>
                        <td className='border-white border-[0.2vw]'>-</td>
                    </tr>
                </table> 
            </div> 
        </div>
    </div>
  )
}

export default Coursework