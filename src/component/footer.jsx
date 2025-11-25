import { Facebook, Instagram, Twitch, Locate, Phone, Clock, Mail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Bred from "../assets/images/bred.jpg"
export default function Footer () {
  return (
    <>
     <div className='w-full h-auto md:h-130 bg-[#855c33]'>
        <div className='grid grid-cols-1 md:grid-cols-3 px-2'>
            <div className=''>
                <h1 className='mt-20 text-5xl font-serif font-semibold px-20 tight-leading text-[#f1e7d8]'>Heritage <br />Bakery</h1>
                <span className='text-xl text-[#f1e7d8] px-20 py-5 font-serif'>Where taste meets elegant</span>
                <div className='w-70 h-40 m-auto rounded-3xl'>
                    <img src={Bred} alt="" className='w-full rounded-3xl h-40 object-cover'/>

                </div>
                 <div className='mx-20 space-x-4 mt-6 flex'>
                    <span className='text-xl font-bold text-[#f1e7d8] '>Visit us:</span>
                    <Facebook className=''/>
                    <Instagram/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>

                 </div>
            </div>
            {/* grid 2 */}
            <div className='h-100'>
             <span className='text-2xl font-semibold flex justify-start font-serif mt-24 px-14 items-center text-[#f1e7d8] '>Heritage </span>
                <div className='flex justify-between items-center px-14 -mt-12'>
                 <ul className='mt-14 space-y-4  font-semibold text-[#f1e7d8] font-srif'>
                 <Link to="/" className='block hover:text-gray-300'>Home</Link>
                           <Link to="/menu" className='block hover:text-gray-300'>Menu</Link>
                           <Link to="/about" className='block hover:text-gray-300'>About Us</Link>
                           <Link to="/gallery" className='block hover:text-gray-300'>Gallery</Link>
                           <Link to="/contact" className='block hover:text-gray-300'>Contact</Link>
             </ul>
                <ul className='mt-13 space-y-4 font-semibold text-[#f1e7d8] font-srif '>
                  <li>Order Tracking</li>
                  <li>Delivery Information</li>
              <li>Returns & Refunds</li>
                <li>Contact Support</li>
               <li>Shipping Policy</li>
              </ul>
                </div>
            </div>
            {/* 3 grid */}
            <div className=' h-100'>
                <div className='flex items-center px-12 mt-20'>
                    <h1 className='text-2xl font-semibold  font-serif mt-4 px-6 items-center text-[#f1e7d8] '>Connect with us</h1>
                </div>
                <div className='flex flex-col'>
                     <div className='mx-18 gap-2 mt-6 flex '>
                        <Locate/>
                        <span className='font-semibold  text-[#f1e7d8]'>123 British america jos</span>
                     </div>
                </div>
                 <div className='flex flex-col'>
                     <div className='mx-18 gap-2 mt-3 flex '>
                        <Phone/>
                        <span className='font-semibold  text-[#f1e7d8]'>+234 8130779098</span>
                     </div>
                </div>
                 <div className='flex flex-col'>
                     <div className='mx-18 gap-2 mt-3 flex '>
                        <Mail/>
                        <span className='font-semibold  text-[#f1e7d8]'>heritageB@gmail.com</span>
                     </div>
                </div>
                 <div className='flex flex-col'>
                     <div className='mx-18 gap-2 mt-3 flex '>
                        <Clock/>
                        <span className='font-semibold  text-[#f1e7d8]'>7am-12pm Monday-Saturday</span>
                     </div>
                </div>
            </div>
        </div>
           <div>
            <hr className='w-full text-[#f1e7d8] mt-3'/>
            <div className='flex justify-between'>
                <p className='py-8 text-[#f1e7d8] px-12'>2025 Heritage Bakery.All right reserved</p>
                <span className='py-8 text-[#f1e7d8] px-12'>Privacy|Policy|Terms $Condition|Accesibility</span>
            </div>
           </div>

     </div>
    
    </>
  )
}
