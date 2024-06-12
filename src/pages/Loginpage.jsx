import React from 'react'
import { strathLogo, strathLib, profileIcon, lockIcon } from '../assets'
import { Link } from 'react-router-dom'

const Loginpage = () => {
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

        <div>                        
            <div className='absolute w-full'>
                <div className='w-full h-[43.8vw] opacity-50 bg-nav-blue absolute'></div>
                <img src={strathLib} className='w-full h-[43.8vw]'/>
            </div>    

            {/* <div className='w-[30vw] h-[30vw] bg-strathmore-yellow absolute z-10'></div> */}

            <div className='flex justify-center pt-[6vw]'>
                <div className='w-[30vw] h-[30vw] bg-white rounded-[1vw] absolute z-10'>
                    <div className='flex justify-center'>
                        <img src={strathLogo} className='h-[5vw] mb-[1vw] mt-[1.1vw]' />
                    </div>

                    <div className='w-full h-[17vw] bg-maroon'>
                        <div className='flex justify-center gap-[1.8vw] font-semibold pt-[2vw] mb-[2vw] text-[1.1vw] text-white'>
                            <div>
                                <div className='flex justify-center'>
                                    <h1 className='text-strathmore-yellow'>
                                        LOGIN
                                    </h1>
                                </div>                               

                                <div className='w-[5vw] h-[0.15vw] bg-strathmore-yellow'></div>
                            </div>

                            <h1>
                                QUICK LINKS
                            </h1>
                        </div>

                        <form className='flex justify-center'>
                            <div>
                                <div className='flex gap-[0.5vw]'>
                                    <img src={profileIcon} className='h-[1.4vw] mt-[0.35vw]' />                               
                                    <input type="text" name="username" placeholder='Username' className='border placeholder-gray-300 text-[1vw] pl-[1vw] border-gray-400 rounded-[0.4vw] w-[17vw] h-[2vw]' />
                                </div>

                                <div className='flex mt-[0.8vw] gap-[0.5vw]'>
                                    <img src={lockIcon} className='h-[1.4vw] mt-[0.3vw]' />                               
                                    <input type="password" name="username" placeholder='Username' className='border placeholder-gray-300 text-[1vw] pl-[1vw] border-gray-400 rounded-[0.4vw] w-[17vw] h-[2vw]' />
                                </div>
                                
                                <div className='flex justify-center'>
                                    <button className='py-[0.3vw] px-[2vw] text-[1vw] rounded-[1vw] cursor-pointer font-semibold text-white bg-strathmore-yellow mt-[1.5vw]'>LOG IN</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='bg-nav-blue h-[5.87vw] rounded-b-[1vw] w-full text-white text-[0.8vw] text-center px-[3vw] pt-[1.55vw]'>
                        <p>
                            For security reasons, please <span className='text-strathmore-yellow font-semibold'> log out </span> and exit your web browser when you are done accessing services that require authentication
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginpage