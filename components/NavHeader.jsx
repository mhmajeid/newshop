'use client';
import React from 'react'
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function MenuDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onKey); };
  }, []);
  return (
    <div ref={ref} className="relative">
      <a
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors duration-200"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label} <Image src="./icons/arrow-down.svg" width={16} height={16} alt="Dropdown" className={`transition ${open ? 'rotate-180' : ''}`} />
      </a>

      {open && (
        <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/10 z-50">
          <ul className="py-1">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex gap-4 lg:justify-between items-center py-4">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Image src="./icons/menu-icon.svg" alt="Menu" width={24} height={24} />
          </button>
          <nav className="nav hidden lg:block ">
            <ul className="flex gap-4">
              <li><a href="" className="hover:text-red-600 transition-colors duration-200">Home</a></li>
              <li>
                <MenuDropdown
                  label="Catalog"
                  items={[
                    { href: '#', label: 'Design' },
                    { href: '#', label: 'Development' },
                    { href: '#', label: 'SEO' },
                  ]}
                />
              </li>
              <li>
                <MenuDropdown
                  label="Fashion"
                  items={[
                    { href: '#', label: 'Design' },
                    { href: '#', label: 'Development' },
                    { href: '#', label: 'SEO' },
                  ]}
                />
              </li>
              <li><a href="" className="hover:text-red-600 transition-colors duration-200">Collections</a></li>
              <li><a href="" className="hover:text-red-600 transition-colors duration-200">Contact</a></li>
            </ul>
          </nav>
          <div className="logo">
            <Image src="/Logo.svg" alt="Logo" width={120} height={40} />
          </div>
          <div className="icons flex gap-4 ml-auto lg:ml-0">
            <a href="" className="hover:text-red-600 transition-colors duration-200 flex items-center gap-2"><Image src="./icons/search-icon.svg" alt="Search" width={24} height={24} /> <span className='hidden md:inline'>Search</span></a>
            <a href="" className="hover:text-red-600 transition-colors duration-200 flex items-center gap-2"><Image src="./icons/user-icon.svg" alt="User" width={24} height={24} /> <span className='hidden md:inline'>Account</span></a>
            <a href="" className="hover:text-red-600 transition-colors duration-200 flex items-center gap-2"><Image src="./icons/wishlist-icon.svg" alt="Wishlist" width={24} height={24} /> <span className='hidden md:inline'>Wishlist</span></a>
            <a href="" className="hover:text-red-600 transition-colors duration-200 relative flex items-center gap-2">
              <Image src="./icons/cart-icon.svg" alt="Cart" width={24} height={24} /><span className='hidden md:inline'>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full
              w-5 h-5 flex items-center justify-center">3</span>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav bg-gray-100 md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li><a href="" className="hover:text-red-600 transition-colors duration-200">Home</a></li>
            <li><a href="" className="hover:text-red-600 transition-colors duration-200">Catalog</a></li>
            <li><a href="" className="hover:text-red-600 transition-colors duration-200">Fashion</a></li>
            <li><a href="" className="hover:text-red-600 transition-colors duration-200">Collections</a></li>
            <li><a href="" className="hover:text-red-600 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  )
}

export default NavHeader
