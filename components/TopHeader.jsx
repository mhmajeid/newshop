'use client';
import React from 'react'
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuTrigger,
  DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function topHeader() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className='top-header'>
        {isOpen && (
          <div className='bar bg-[#BB2020] text-white py-[10px] md:py-[24px] sticky top-0 z-50'>
            <div className='container mx-auto'>
              <div className='content relative'>
                <button onClick={() => setIsOpen(false)} className='cursor-pointer absolute right-3 top-0 md:top-[6px]'><Image src="./icons/close-icon.svg" width={14} height={14} alt="Close" /></button>
                <p className='text-[12px] sm:text-[20px] text-center'>Free Delivery On Order Over $150. Don’t Miss Discount.</p>
              </div>
            </div>
          </div>
        )}
        <div className='hidden lg:block info-bar mb-4 py-3 border-b border-[#000]'>
          <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
              <ul className='flex gap-4 items-center'>
                <li><a className='flex items-center gap-2 hover:text-red-600 transition-colors duration-200' href=""><Image src="./icons/Location-icon.svg" width={24} height={24} alt="Location" />Location</a></li>
                <li>|</li>
                <li><a className='flex items-center gap-2 hover:text-red-600 transition-colors duration-200' href=""><Image src="./icons/Support-icon.svg" width={24} height={24} alt="Support" />Support</a></li>
              </ul>
              <p className='mb-0'>Open Doors to A World of Fashion - <a href="" className='hover:text-red-600 transition-colors duration-200 underline decoration-2'>Discover More.</a></p>
              <ul className='flex items-center gap-4'>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="border-none hover:!bg-white">EGP<Image src="./icons/arrow-down.svg" width={24} height={24} alt="Currency" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>USD</DropdownMenuItem>
                      <DropdownMenuItem>SR</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>|</li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="border-none hover:!bg-white">English<Image src="./icons/arrow-down.svg" width={24} height={24} alt="Currency" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Arabic</DropdownMenuItem>
                      <DropdownMenuItem>French</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default topHeader
