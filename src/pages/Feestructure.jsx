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

        <div className='absolute w-[65vw] pb-[1vw] bg-white left-[33.5vw] top-[7vw] rounded-[0.7vw] pt-[1vw] flex justify-center'>
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
                    {/* <tr className='bg-strathmore-red text-white'>
                        <th className='border-white border-[0.2vw] w-[60vw] py-[0.5vw] text-start' colspan="6">
                            <span className='ml-[0.8vw]'>
                                ACADEMIC YEAR: 20222-2023
                            </span>

                            <span className='ml-[9vw]'>
                                Semester 1: Annual
                            </span>
                        </th>                                          
                    </tr> */}

                    <tr className='bg-strathmore-yellow font-bold text-strathmore-blue'>
                        <td className='border-white border-[0.2vw] w-[30vw]' rowSpan="2" colSpan="2">DATE</td>
                        <td className='border-white border-[0.2vw] w-[15vw]' rowSpan="2" colSpan="2">DOCUMENT No.</td>                        
                        <td className='border-white border-[0.2vw] w-[15vw]' rowSpan="2" colSpan="2">DOCUMENT TYPE</td>
                        <td className='border-white border-[0.2vw] w-[15vw]' colSpan="2">AMOUNT(In Ksh.)</td>
                                                                       
                    </tr>

                    <tr className='bg-strathmore-yellow font-semibold text-strathmore-blue'>
                        <td className='bg-strathmore-red text-white border-white border-[0.2vw]' >Debit</td>
                        <td className='bg-strathmore-red text-white border-white border-[0.2vw]'>Credit</td>                                              
                    </tr>

                    <tr className='bg-custom-grey text-white font-semibold'>
                        <td className='border-white border-[0.2vw] pl-[1vw]' colSpan="2">14-11-2022</td>
                        <td className='border-white border-[0.2vw]' colSpan="2">57849313</td>                        
                        <td className='border-white border-[0.2vw]' colSpan="2">Invoice</td>
                        <td className='border-white border-[0.2vw]'>70,000.00 </td>
                        <td className='border-white border-[0.2vw]'>0.00</td>
                    </tr>

                    <tr className='bg-custom-light-grey  font-semibold'>
                        <td className='border-white border-[0.2vw] pl-[1vw]' colSpan="2">14-11-2022</td>
                        <td className='border-white border-[0.2vw]' colSpan="2">57849313</td>                        
                        <td className='border-white border-[0.2vw]' colSpan="2">Invoice</td>
                        <td className='border-white border-[0.2vw]'>70,000.00 </td>
                        <td className='border-white border-[0.2vw]'>0.00</td>
                    </tr>   

                    <tr className='bg-custom-grey text-white font-semibold'>
                        <td className='border-white border-[0.2vw] pl-[1vw]' colSpan="2">14-11-2022</td>
                        <td className='border-white border-[0.2vw]' colSpan="2">57849313</td>                        
                        <td className='border-white border-[0.2vw]' colSpan="2">Transfer Credit </td>
                        <td className='border-white border-[0.2vw]'>0.00 </td>
                        <td className='border-white border-[0.2vw]'>80,000.00</td>
                    </tr>  

                    <tr className='bg-custom-light-grey  font-semibold'>
                        <td className='border-white border-[0.2vw] pl-[1vw]' colSpan="2">14-11-2022</td>
                        <td className='border-white border-[0.2vw]' colSpan="2">57849313</td>                        
                        <td className='border-white border-[0.2vw]' colSpan="2">Invoice</td>
                        <td className='border-white border-[0.2vw]'>70,000.00 </td>
                        <td className='border-white border-[0.2vw]'>0.00</td>
                    </tr>

                    <tr className='bg-strathmore-yellow text-strathmore-blue  font-bold'>
                      <td className='border-white border-[0.2vw] pl-[1vw]' colSpan="6">Fee Summary</td>
                      <td className='border-white border-[0.2vw] pl-[1vw]' colSpan="2">210,000.00</td>
                    </tr>             
                </table> 

                <div className='flex justify-center mt-[3vw]'>
                  <div className='bg-green w-[20vw] py-[0.4vw] text-center text-white font-bold rounded-[1vw] text-[1vw] cursor-pointer'>
                    <p>
                      DOWNLOAD STATEMENT
                    </p>
                  </div>
                </div>

                <div className='flex justify-center mt-[1vw]'>
                  <div className='px-[0.5vw] pb-[1vw] bg-nav-blue text-[1vw] flex justify-center pt-[0.4vw] font-semibold rounded-[0.5vw]'>
                    <div>
                      <p className='text-white pb-[1vw]'>
                        For Inquiries/Complains/Feedback
                      </p>

                      <form>
                        <input type="text" placeholder='Write Here...' className='border placeholder-gray-300 text-[1vw] pl-[1vw] border-gray-400 rounded-[0.4vw] w-[40vw] h-[10vw]' />

                        <div className='flex justify-center'>
                            <button className='py-[0.3vw] px-[1vw] text-[1vw] cursor-pointer font-semibold text-white bg-strathmore-red mt-[1.5vw]'>Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Feestructure