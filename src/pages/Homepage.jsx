import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { heroImg, strathLib } from '../assets'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div>
            <div className='bg-strathmore-red text-white text-[2vw] font-light italic py-[0.8vw] flex justify-center w-full absolute'>
                <h1>
                    Welcome to Strathmore eLearning System
                </h1>
            </div>

            <div className='absolute top-[20vw] w-full'>
                <div className=' text-white flex justify-center bg-black bg-opacity-70 text-[3.4vw] italic py-[0.6vw]'>
                    <h1>
                        STRATHMORE INSTITUTE OF MANAGEMENT & TECHNOLOGY
                    </h1>
                </div>

                <div className='flex justify-center mt-[-0.8vw]'>
                    <p className='bg-strathmore-red text-white px-[1.5vw] py-[0.3vw] absolute cursor-pointer'>
                        ENTER &gt;
                    </p>                    
                </div>
            </div>
                
            <div>
                <img src={heroImg} className='h-[44vw] w-full' />
            </div>
        </div>

        <div>
            <div className='absolute w-full'>
                <div className='flex justify-center text-white mt-[6vw]'>
                    <p className='w-[70vw] text-center text-[1.5vw] italic'>
                    Strathmore University, a leading University in the region, whose mission is to provide all-round
quality education in an atmosphere of freedom and responsibility;
excellence in teaching, research and scholarship; ethical and social development; and service to society.
                    </p>
                </div>
            </div>

            <img src={strathLib} className='w-full'/>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage