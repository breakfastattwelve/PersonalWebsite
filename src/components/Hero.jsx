import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { RxHamburgerMenu,RxSlash } from "react-icons/rx";

function Hero() {
  return (
    <div className='bg-[#0d1117]'>
      <div className='container mx-auto max-w-[1320px] relative h-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row md:justify-between items-center border-b border-white border-opacity-20'>
        
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white flex flex-col sm:flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faAngleLeft} className="text-xl sm:text-2xl md:text-3xl text-[#47BA87]" />
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#47BA87]">Kittipak Luanmanee</span>
            <RxSlash className='text-2xl sm:text-3xl md:text-4xl text-[#47BA87]'/>
            <FontAwesomeIcon icon={faAngleRight} className="text-xl sm:text-2xl md:text-3xl text-[#47BA87]" />
          </h1>
          <p className='text-white text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4'>I'm a <span className='text-[#47BA87]'>Full Stack Developer</span></p>
        </div>
        
      </div>
    </div>
  )
}

export default Hero