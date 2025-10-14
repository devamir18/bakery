import React from 'react'
import Vc from "../assets/images/Vc.jpg"
import Bred from  "../assets/images/bred.jpg"
import Mid from "../assets/images/mid.jpg"
import Mido from "../assets/images/mido.png"
import Cho from "../assets/images/cho.jpg"
import {  ArrowUpIcon, Heart, Star } from 'lucide-react'
import { useState,useEffect } from 'react'

export default function section2 ()  {
  const [scrollY, setScrollY] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    
    transform: `translateY(${scrollY * 0.3}px)`,
    
    opacity: 1 - Math.min(scrollY / 400, 1), 
  };
  
  

  return (
    <>



    <div className='bg-[#855c33] pt-24 pb-16 md:py-32 overflow-hidden min-h-screen'>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        
        <div 
          style={parallaxStyle} 
          className='relative z-10 text-center md:text-left mb-24 md:mb-32'
        >
         
          <h1 className='text-6xl md:text-8xl lg:text-9xl font-black font-serif text-[#f1e7d8] leading-none tracking-tight'>
            Taste love 
          </h1>
          <h1 className='text-6xl md:text-8xl lg:text-9xl font-black font-serif text-[#f1e7d8] leading-none ml-0 md:ml-12'>
            in every layer
          </h1>
        </div>

       
        <div className='w-full h-px bg-[#6b492b] mb-16 relative z-0' />
        
       
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 relative z-20'>
          

          {
            ['Chips', 'Cake', 'Bread', 'Cookies', 'Muffin', 'Donut'].map((item, index) => (
              <div 
                key={index} 
                className='group bg-[#6b492b] rounded-2xl p-4 md:p-6 shadow-2xl transition duration-500 transform hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]'
              >
                <div className='w-28 h-28 mx-auto mb-4 relative'>
                  
                  <img 
                    src={index === 0 ? Vc : index === 1 ? Cho : Bred} 
                    alt={item} 
                    className='w-full h-full rounded-full object-cover border-4 border-[#f1e7d8] transition-transform duration-500 group-hover:rotate-3'
                  />
                  
                  <span className='absolute top-0 right-0 h-4 w-4 rounded-full bg-[#f1e7d8] animate-ping opacity-75' />
                </div>
                
               
                <h2 className='text-center text-xl font-extrabold text-white mb-1 tracking-wider'>
                  {item}
                </h2>
                <p className='text-center text-sm text-[#f1e7d8] opacity-80 group-hover:opacity-100 transition-opacity'>
                  Available
                </p>
              </div>
            ))
          }
            
        </div>
      </div>
    </div>
    </>
  )
}
