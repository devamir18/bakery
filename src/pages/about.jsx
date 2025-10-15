import React from 'react'
import Twq from "../assets/images/twq.jpg"
import Odo from "../assets/images/odo.jpg"
import Papa from "../assets/images/papa.jpg"
import Paps from "../assets/images/paps.jpg"
import Fry from "../assets/images/fry.jpg"
import Amiy from "../assets/images/amiy.jpg"
import Pap from "../assets/images/pap.jpg"
import Blace from "../assets/images/blace.jpg"

export default function about () {
  return (
    <>
    <div className='w-full h-auto '>
     
      <div className='w-full min-h-96  bg-[#855c33]'>
        <h1 className='text-center py-50 font-serif text-7xl font-bold text-[#f1e7d8]'>Heritage bakery </h1>
        
      </div>

      
      <div className='w-full h-auto bg-[#855c33]'>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 px-4 sm:px-8 md:px-16 lg:px-30 py-8 md:py-12'>
          <div className='h-auto'>
            <h1 className='text-[#f1e7d8] text-lg md:text-xl font-bold font-serif py-4 md:py-6'>
              History of our Bakery
            </h1>
            <p className='text-[#f1e7d8] text-sm '>
              Founded with passion and a pinch of love, Heritage Bakery has been serving the community for 10 years. Our journey began with a dream to bring people together through the joy of freshly baked goods. From traditional recipes to innovative creations, our bakers have poured their hearts into every loaf, cake, and pastry.
            </p>
          </div>
          
          <div className='h-auto'>
            <h1 className='text-[#f1e7d8] text-lg md:text-xl font-bold font-serif py-4 md:py-6 text-center'>
              Our Mission
            </h1>
            <p className='text-[#f1e7d8] text-sm '>
              At Heritage Baker, our mission is to craft delicious, high-quality baked goods that bring people together and make every moment sweeter. We're dedicated to using only the finest ingredients, embracing innovation, and providing exceptional customer service. Our goal is to make our bakery a warm and welcoming destination where everyone feels at home
            </p>
          </div>
          
          <div className='h-auto'>
            <h1 className='text-[#f1e7d8] text-lg md:text-xl font-bold font-serif py-4 md:py-6 text-center'>
              Our Value
            </h1>
            <p className='text-[#f1e7d8] text-sm '>
              - Quality: We're committed to using only the finest ingredients and techniques to craft exceptional baked goods.<br/>
              - Community: We believe in building strong relationships with our customers, partners, and community.<br/>
              
            </p>
          </div>
        </div>

        <div className='w-full h-auto py-8 md:py-12 px-4 sm:px-8 md:px-16 lg:px-30'>
          <h1 className='text-[#f1e7d8] text-2xl md:text-3xl font-bold font-serif text-center mb-8 md:mb-12'>
            Our Management Team
          </h1>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            <div className='h-auto bg-amber-900/30 rounded-lg p-6 hover:bg-amber-900/40 transition-colors'>
              <div className='w-full h-48 md:h-56 mb-4 overflow-hidden rounded-lg'>
                <img 
                  src={Papa} 
                  alt="Manager" 
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-[#f1e7d8] text-lg md:text-xl font-bold mb-2'>
                Mr moe
              </h3>
              <p className='text-amber-200 text-sm md:text-base font-semibold mb-2'>
                Head Baker & Co-Founder
              </p>
              <p className='text-[#f1e7d8] text-sm leading-relaxed'>
                With 20 years of baking experience, John brings traditional techniques and innovative recipes to Heritage Bakery.
              </p>
            </div>

            <div className='h-auto bg-amber-900/30 rounded-lg p-6 hover:bg-amber-900/40 transition-colors'>
              <div className='w-full h-48 md:h-56 mb-4 overflow-hidden rounded-lg'>
                <img 
                  src={Pap} 
                  alt="Manager" 
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <h3 className='text-[#f1e7d8] text-lg md:text-xl font-bold mb-2'>
                Sarah james
              </h3>
              <p className='text-amber-200 text-sm md:text-base font-semibold mb-2'>
                Operations Manager
              </p>
              <p className='text-[#f1e7d8] text-sm leading-relaxed'>
                Sarah ensures every aspect of our bakery runs smoothly, from supply chain to customer satisfaction.
              </p>
            </div>

            <div className='h-auto bg-amber-900/30 rounded-lg p-6 hover:bg-amber-900/40 transition-colors'>
              <div className='w-full h-48 md:h-56 mb-4 overflow-hidden rounded-lg'>
                <img 
                  src={Paps} 
                  alt="Manager" 
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-[#f1e7d8] text-lg md:text-xl font-bold mb-2'>
                Michael ebuka
              </h3>
              <p className='text-amber-200 text-sm md:text-base font-semibold mb-2'>
                Pastry Chef
              </p>
              <p className='text-[#f1e7d8] text-sm leading-relaxed'>
                Michael's artistic creations and attention to detail make every pastry a work of edible art.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    </>
  )
}
