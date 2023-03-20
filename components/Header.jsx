'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const Links = [
    { name: 'Menu', link: '#menu' },
    { name: 'Location', link: '#location' },
    { name: 'Payment Methods', link: '#payment-methods' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Events', link: '#events' },
    { name: 'About Us', link: '#about-us' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' }
  ]
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className='fixed z-20 select-none'>
        <div className='shadow-md w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between lg:backdrop-blur-md bg-black lg:bg-black/70 py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center justify-center font-[Poppins] text-white'>
              <span className='text-3xl mr-1 pt-2 flex items-center justify-center pr-2'>
                <Image
                  src='/zur-birke.svg'
                  width={50}
                  height={50}
                  alt='Zur Birke'
                />
              </span>
              <p>Zur Birke</p>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'
            >
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] bg-black lg:bg-transparent left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
                open ? 'top-20 ' : 'top-[-490px]'
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className='md:ml-8 text-md md:my-0 my-7 font-[Poppins]'
                >
                  <Link
                    href={link.link}
                    className='text-white hover:text-gray-200 duration-500 hover:underline decoration-[#deb887] decoration-2'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
