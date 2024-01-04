import React, { useState } from 'react'
import './MenuBurger.css'

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button
      onClick={handleClick}
      className="md:hidden flex flex-col justify-center items-center mt-3 mx-3"
    >
      <span
        className={`bg-color block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
      ></span>
      <span
        className={`bg-color block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`bg-color block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
      ></span>
    </button>
  )
}

export default MenuBurger
