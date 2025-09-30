'use client';
import React from 'react'
import { useState } from 'react';
const TABS = [
  {
    id: "featured",
    label: "Featured",
    products: [
      {
        id: 1, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 2, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 3, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
      {
        id: 4, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 5, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 6, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 7, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
      {
        id: 8, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 9, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 10, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 11, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 12, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
    ],
  },
  {
    id: "new-arrivals",
    label: "New Arrivals",
    products: [
      {
        id: 2, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 1, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      
      {
        id: 3, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
      {
        id: 4, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 5, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 6, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 7, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
      {
        id: 8, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 9, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 10, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 11, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 12, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
    ],
  },
  {
    id: "best-seller",
    label: "Best Seller",
    products: [
      {
        id: 1, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 2, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 3, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
      {
        id: 4, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 5, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 6, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 7, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
      {
        id: 8, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 9, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/04.png" 
      },
      {
        id: 10, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/01.png" 
      },
      {
        id: 11, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/02.png" 
      },
      {
        id: 12, 
        Rating:"./images/Ratings.svg",
        name: "Layered Velvet Skirt-Beige", 
        price: "500.00 LE", 
        oldPrice: "700.00 LE", 
        image: "./images/03.png" 
      },
    ],
  },

];
const Products = () => {
  const [active, setActive] = useState(TABS[0].id);

  return (
    <div className='products-section container mx-auto my-[80px]'>
      <div className="">
        <h2 className="text-[33px] lg:text-[48px] text-center font-bold mb-4">Our Products</h2>
        <div className="flex justify-center  w-[fit-content] mx-auto mb-6">
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={[
                  "px-4 py-2 text-[16px] md:text-[24px] cursor-pointer border-2 border-black md:text-base -ml-[2px] transition-colors",
                  isActive
                    ? "bg-[#F5DFBD] font-medium"
                    : "text-gray-600 hover:bg-[#F5DFBD]",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Panels */}
        {TABS.map(
          (tab) =>
            active === tab.id && (
              <div key={tab.id} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-[30px] md:mx-auto">
                {tab.products.map((p) => (
                  <div
                    key={p.id}
                    className="bg-[#F7F5F0] text-center"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-[360px] object-cover mb-3"
                    />
                    <img src={p.Rating} alt="Rating" className="mb-2 mx-auto" />
                    <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                    <div className="flex justify-center gap-2 items-center mb-[8px]">
                      <p className="text-gray-600">{p.price}</p>
                      <p className="text-gray-400 line-through">{p.oldPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
      <div className='text-center mt-[40px]'>
        <a href="#" className='px-6 py-3 bg-[#F5DFBD] text-lg font-medium hover:bg-[#E5CBA8] transition-colors duration-200'>View All Products</a>
      </div>
    </div>
  )
}

export default Products
