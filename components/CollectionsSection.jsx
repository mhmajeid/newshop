import React from 'react'

const CollectionsSection = () => {
  return (
    <div className='collections-section container mx-auto my-8 p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[48px]'>
        <div className='collection-item'>
          <a href="" className='block'>
            <img src="/images/Men-Colection.jpg" alt="Collection 1" className='w-full h-auto' />
          </a>
          <a href="" className='mt-[50px] block'>
            <img src="/images/Shoes-Colection.png" alt="Collection 2" className='w-full h-auto' />
          </a>
        </div>
        <div className='collection-item'>
          <a href="" className='block'><img src="/images/Watches-Colection.png" alt="Collection 3" className='w-full h-auto' /></a>
          <a href="" className='mt-[50px] block'><img src="/images/Women-Colection.png" alt="Collection 4" className='w-full h-auto' /></a>
        </div>
      </div>
    </div>
  )
}

export default CollectionsSection
