import React from 'react'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {

  const [toggle, setToggle] = useState(false)

  const updateToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
        <div className="bg-[#0d1117]">
          <div className="w-full relative h-auto p-10 flex flex-col md:flex-row md:justify-between items-center border-b border-white shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
           
            <div className='flex items-center justify-center text-3xl font-bold text-white px-4  py-4 md:py-0'>
              <div className="cursor-pointer text-4xl flex items-center">
                <span className="text-4xl font-bold">Kittipak's Portfolio</span>
              </div>
            </div>
                
            
            <ul className= { `${!toggle ? "hidden" : "flex"}  flex flex-col md:flex md:flex-row gap-8 text-white mt-10 md:mt-0 `}>
              <li className="my-2 md:my-0 md:mx-4 hover:text-[#47BA87] transition-colors duration-300 cursor-pointer">Home</li>
              <li className="my-2 md:my-0 md:mx-4 hover:text-[#47BA87] transition-colors duration-300 cursor-pointer">About</li>
              <li className="my-2 md:my-0 md:mx-4 hover:text-[#47BA87] transition-colors duration-300 cursor-pointer">Skills</li>
              <li className="my-2 md:my-0 md:mx-4 hover:text-[#47BA87] transition-colors duration-300 cursor-pointer">Projects</li>
              <li className="my-2 md:my-0 md:mx-4 hover:text-[#47BA87] transition-colors duration-300 cursor-pointer">Contact</li>
            </ul>

            {/* Hamburger Menu Icon */}
              <RxHamburgerMenu 
                onClick={updateToggle} 
                className="absolute md:hidden right-5 text-white text-2xl cursor-pointer hover:text-[#47BA87] transition-colors duration-300"
              />


          </div>
        </div>
    </>
  )
}

export default Navbar