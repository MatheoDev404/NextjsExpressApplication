'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Logo du site
import Logo from '../../../public/assets/logo.png'

// components
import MenuBurger from '../Menuburger/MenuBurger'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // gère l'ouverture et la fermeture du menu en version mobile et tablette
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between p-4">
      <Image className="w-10 h-10" alt="logo du site" src={Logo} />
      <nav className="flex flex-col content-end">
        <div className="absolute top-2 right-2" onClick={handleClick}>
          <MenuBurger />
        </div>
        <ul
          className={`border-2 border-sky-500 flex-col text-right mt-6 p-2 ${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:flex-row md:mt-0 md:border-0`}
        >
          <li>
            <Link className="py-2 md:mx-4" href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="py-2 md:mx-4" href="/galerie">
              Galerie
            </Link>
          </li>
          <li>
            <Link className="py-2 md:mx-4" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="py-2 md:mx-4" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
