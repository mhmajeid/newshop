import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-gray-300 mt-[80px] text-center md:text-left'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-8 py-8'>
          <div className='logo'>
            <img src="/logo.svg" alt="Logo" className='w-32 mb-[1rem] mx-auto md:mx-0' />
            <p className='px-[74px] md:px-[0]'>Best information about the company gies here but now lorem ipsum is</p>
            <div className='flex items-center gap-4 mt-4 social-icons justify-center md:justify-start'>
              <a href="#"><img className='hover:opacity-80 transition-opacity duration-300' src="./icons/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img className='hover:opacity-80 transition-opacity duration-300' src="./icons/instagram.svg" alt="Instagram" /></a>
              <a href="#"><img className='hover:opacity-80 transition-opacity duration-300' src="./icons/linkedin.svg" alt="LinkedIn" /></a>
              <a href="#"><img className='hover:opacity-80 transition-opacity duration-300' src="./icons/youtube.svg" alt="YouTube" /></a>
            </div>
          </div>
          <div className='links'>
            <h4 className='font-semibold mb-4'>About</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:underline font-light'>About Us</a></li>
              <li><a href="#" className='hover:underline font-light'>Contact</a></li>
              <li><a href="#" className='hover:underline font-light'>Privacy Policy</a></li>
              <li><a href="#" className='hover:underline font-light'>Terms of Service</a></li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='font-semibold mb-4'>Partnership</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:underline font-light'>About Us</a></li>
              <li><a href="#" className='hover:underline font-light'>Contact</a></li>
              <li><a href="#" className='hover:underline font-light'>Privacy Policy</a></li>
              <li><a href="#" className='hover:underline font-light'>Terms of Service</a></li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='font-semibold mb-4'>Information</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:underline font-light'>About Us</a></li>
              <li><a href="#" className='hover:underline font-light'>Contact</a></li>
              <li><a href="#" className='hover:underline font-light'>Privacy Policy</a></li>
              <li><a href="#" className='hover:underline font-light'>Terms of Service</a></li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='font-semibold mb-4'>For users</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:underline font-light'>About Us</a></li>
              <li><a href="#" className='hover:underline font-light'>Contact</a></li>
              <li><a href="#" className='hover:underline font-light'>Privacy Policy</a></li>
              <li><a href="#" className='hover:underline font-light'>Terms of Service</a></li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='font-semibold mb-4'>Get app</h4>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:opacity-80 transition-opacity duration-300'>
                <img className='mx-auto md:mx-0' src="./icons/apple.svg" alt="Download on the App Store" />
                </a></li>
              <li><a href="#" className='hover:opacity-80 transition-opacity duration-300'>
                <img className='mx-auto md:mx-0' src="./icons/google-play.svg" alt="Get it on Google Play" />
                </a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-center py-4 bg-[#F5DFBD] px-[8px]'>© 2023 Your Company. All rights reserved.</p>
    </div>
  )
}

export default Footer
