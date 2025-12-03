'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: '_home', href: '#' },
  { label: '_features', href: '#features' },
  { label: 'services', href: '#services' },
  { label: '_pricing', href: '#pricing' },
  { label: '_contact', href: '#contact' },
]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  return (
    <nav className="relative z-20 h-16 w-full border-b border-[#ccc] bg-[#fff]">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <span className="text-[#607b96] md:hidden">_menu</span>
        ) : (
          <div className="animate-fade-up relative flex items-center gap-3 transition-all duration-300 md:static">
            {/* logo */}
            <a href="https://www.codevertiser.com/" className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                className="h-8"
                alt="Logo"
              />
            </a>
            <span className="text-[#607b96]">XEVEN</span>
          </div>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <X className="cursor-pointer text-slate-500" />
            ) : (
              <Menu className="cursor-pointer text-slate-500" />
            )}
          </button>
        </div>

        <ul
          className={`${isVisible ? 'flex' : 'hidden'} animate-fade-in absolute top-16 left-0 z-10 z-50 h-screen w-full flex-col bg-[#fff] md:static md:top-0 md:flex md:h-full md:w-[72%] md:flex-row lg:w-[65%]`}
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              className="flex items-center border-b border-[#ccc] bg-white px-4 text-2xl md:border-y-0 md:border-e md:px-8 md:text-base md:first:border-s md:last:ml-auto md:last:border-none md:last:px-0"
            >
              <Link
                href={item.href}
                className="w-full py-7 text-slate-500 transition-all duration-150 hover:text-slate-700 md:py-0"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
