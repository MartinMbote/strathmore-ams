import React from 'react'
import NavbarStudentPortal from '../components/NavbarStudentPortal'
import SidePanel from '../components/SidePanel'
import Background from '../components/Background'

const Feestructure = () => {
  return (
    <div>
        <NavbarStudentPortal />
        <SidePanel />
        <Background />

        <div className='absolute left-[17vw] top-[7vw] rounded-[20vw] w-[14vw] h-[14vw] pt-[3vw] bg-white text-center'>
          <p className='text-[1vw] font-semibold text-strathmore-blue'>
            CURRENT FEE BALANCE
          </p>

          <p className='text-[1vw]'>
            Year 4 Semester 1 - 2023
          </p>

          <p className='text-strathmore-red font-semibold text-[2vw]'>
            Ksh. 90,000
          </p>

          <p className='text-[0.8vw]'>
            Last Payment made on<br /><span className='font-semibold'>14-11-2022</span>
          </p>
        </div>

        <div className='absolute w-[63vw] h-[40vw] bg-white left-[33.5vw] top-[7vw] rounded-[0.7vw] pt-[1vw] flex justify-center'>
          <div>
            <div className='flex cursor-pointer'>
              <p className='py-[0.4vw] w-[10vw] bg-strathmore-yellow rounded-t-[0.5vw] text-center text-strathmore-red font-semibold'>
                FEE STATEMENTS
              </p>

              <p className='py-[0.4vw] w-[12vw] text-strathmore-blue hover:bg-strathmore-yellow rounded-t-[0.5vw] text-center hover:text-strathmore-red font-semibold'>
                FEE STRUCTURE
              </p>
            </div>

            <div className='w-full h-[0.07vw] mb-[0.5vw] bg-custom-grey'></div>

            <table className='text-center text-[1vw]'>
                    <tr className='bg-strathmore-red text-white'>
                        <th className='border-white border-[0.2vw] w-[60vw] py-[0.5vw] text-start' colspan="6">
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

                    <tr className='bg-custom-light-grey font-semibold'>
                        <td className='border-white border-r-[0.2vw] text-start pl-[1vw]' colSpan="2">Host Assessment</td>
                        <td className='border-white border-r-[0.2vw]'></td>
                        <td className='border-white border-r-[0.2vw] text-strathmore-red bg-white'>42/50</td>
                        <td className='border-white border-r-[0.2vw]'>-</td>
                        <td className='border-white border-r-[0.2vw]'>-</td>
                    </tr>

                    <tr className='bg-custom-light-grey font-semibold'>
                        <td className='border-white border-r-[0.2vw] text-start pl-[1vw]' colSpan="2">Faculty Assessment</td>
                        <td className='border-white border-r-[0.2vw]'></td>
                        <td className='border-white border-r-[0.2vw] text-strathmore-red bg-white'>42/50</td>
                        <td className='border-white border-r-[0.2vw]'>-</td>
                        <td className='border-white border-r-[0.2vw]'>-</td>
                    </tr>
                </table> 
          </div>
        </div>
    </div>
  )
}

export default Feestructure