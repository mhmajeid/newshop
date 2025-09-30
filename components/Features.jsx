import React from 'react'

const Features = () => {
  return (
    <div className='features container mx-auto my-8 p-4'>
      <div className='grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='feature-item md:flex sm:block text-center md:text-left items-center gap-4'>
          <img src="./icons/truck-tick.svg" alt="Feature 1" className='w-12 h-12 mx-auto md:mx-0' />
          <div>
            <h4 className='font-bold text-lg mb-1'>Free Shipping</h4>
            <p className='text-gray-600 text-sm'>Tell about your service</p>
          </div>
        </div>

        <div className='feature-item md:flex sm:block text-center md:text-left items-center gap-4'>
          <img src="./icons/dollar-circle.svg" alt="Feature 2" className='w-12 h-12 mx-auto md:mx-0' />
          <div>
            <h4 className='font-bold text-lg mb-1'>Money Guarantee</h4>
            <p className='text-gray-600 text-sm'>30 days for exchange</p>
          </div>
        </div>
        <div className='feature-item md:flex sm:block text-center md:text-left items-center gap-4'>
          <img src="./icons/online-support.svg" alt="Feature 3" className='w-12 h-12 mx-auto md:mx-0' />
          <div>
            <h4 className='font-bold text-lg mb-1'>Online Support</h4>
            <p className='text-gray-600 text-sm'>24 hrs a day . 7 days a week</p>
          </div>
        </div>
        <div className='feature-item md:flex sm:block text-center md:text-left items-center gap-4'>
          <img src="./icons/card-tick.svg" alt="Feature 3" className='w-12 h-12 mx-auto md:mx-0' />
          <div>
            <h4 className='font-bold text-lg mb-1'>Flexible Payment</h4>
            <p className='text-gray-600 text-sm'>Pay with multiple Credit Card</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features
