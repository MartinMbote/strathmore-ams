import React from 'react'
import { faceIcon, linkedIn, youTubelogo, email, pin, phone } from '../assets'

const Footer = () => {
  return (
    <div>
        <div className='bg-strathmore-red py-[0.6vw] text-white font-semibold'>
            <div className='flex justify-center gap-[25vw]'>
                <h2>
                    QUICK LINKS
                </h2>

                <h2>
                    GET SOCIAL
                </h2>

                <h2>
                    CONTACT US
                </h2>
            </div>
        </div>

        <div className='bg-nav-blue pt-[1.5vw] pb-[2vw] text-white font-light'>
            <div className='flex ml-[16vw]'>
                <div>
                    <p>Library</p>
                    <p>AMS Student Module</p>
                    <p>Sagana</p>
                    <p>Digital Repository</p>
                </div>

                <div className='ml-[21.3vw]'>
                    <div className='flex gap-[0.5vw]'>
                        <img src={faceIcon} className='h-[1.5vw]' />
                        <p>Facebook</p>
                    </div>

                    <div className='flex gap-[0.5vw] mt-[0.5vw]'>
                        <img src={linkedIn} className='h-[1.6vw]' />
                        <p>LinkedIn</p>
                    </div>

                    <div className='flex gap-[0.5vw] mt-[0.4vw]'>
                        <img src={youTubelogo} className='h-[1.6vw]' />
                        <p>YouTube</p>
                    </div>
                </div>

                <div className='ml-[13.3vw]'>
                    <div className='flex gap-[0.5vw] justify-center'>
                        <img src={email} className='h-[1.3vw] mt-[0.23vw]' />
                        <p>info@strathmore.edu</p>
                    </div>

                    <div className='flex gap-[0.5vw] justify-center mt-[0.15vw]'>
                        <img src={pin} className='h-[1.3vw] mt-[0.23vw]' />
                        <p>Ole Sangale Road, Nairobi-Kenya</p>
                    </div>

                    <div className='flex gap-[0.5vw] justify-center mt-[0.15vw]'>
                        <img src={phone} className='h-[1.3vw] mt-[0.23vw]' />
                        <p>(+254) (0)703-034000/200/300 | (+254) (0)730-734000/200/300</p>
                    </div>

                    <div className='flex gap-[0.5vw] justify-center text-center mt-[0.15vw]'>
                        <img src={pin} className='h-[1.3vw] mt-[0.9vw]' />
                        <p>Madaraka Estate Ole Sangale Road,<br/> PO Box 59857, 00200 City Square Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer