import React from 'react'
import Hun from "../assets/images/hun.jpg"
import Blace from "../assets/images/blace.jpg"
import Zzz from "../assets/images/zzz.jpg"
import Zzq from "../assets/images/zzq.jpg"
import Hung from "../assets/images/hung.jpg"
import { ShoppingBag,Calendar, Ticket, Sprout, WholeWord, Badge, ArrowUpIcon } from 'lucide-react'

export default function Section3 () {


  return (
    <>
    <div className='w-full h-auto bg-[#855c33] md:h-220'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-12'>
            <div className='mt-12 h-120'>
             <h1 className='text-3xl md:text-5xl font-bold  font-serif px-6 py-16 text-white'>Serving You <br /> Better</h1>
             <p className='-mt-12 px-5 font-serif text-gray-200'>We offer More than great pastries.from online orders to world <br /> class chefs, we ensure every part of your experience is exceptional</p>
               <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-blue-90 h-auto'>
                    <ShoppingBag className='mt-6 mx-3 text-white'/>
                    <p className=' font-semibold text-white -mt-6 px-12'>Online Orders</p>
                     <Calendar className='mt-6 mx-3 text-white'/>
                    <p className=' font-semibold text-white -mt-6 px-12'>Table Reservation</p>
                     <Ticket className='mt-6 mx-3 text-white'/>
                    <p className=' font-semibold text-white -mt-6 px-12'>24/7 Availability</p>
                </div>
                <div className='bg-blue-90 h-auto '>
                    <Sprout className='mt-6 mx-3 text-white'/>
                    <p className='font-semibold text-white -mt-6 px-12'>Sportless Kitchen</p>
                     <WholeWord className='mt-6 mx-3 text-white'/>
                    <p className='font-semibold text-white -mt-6 px-12'>World Class Chef</p>
                     <Badge className='mt-6 mx-3 text-white'/>
                    <p className=' font-semibold text-white -mt-6 px-12'>Organised Dining Table</p>
                </div> 
               </div>
            </div>
                    {/* grid 2 */}
                  <div className=''>
                    <div className='w-100 h-100 float-right'>
                         <img src={Zzq} alt="" className='w-100 h-90 object-cover object-center  mt-30 rounded'/>
                    </div>
                     <div className='w-50 h-50 '>
                         <img src={Zzz} alt="" className='w-50 h-50 object-cover object-center mt-20 ml-30 rounded'/>
                    </div>
                  </div>

        </div>
                    <div className='bg-[#855c33]'>
                     <div className=' grid grid-cols-1  md:grid-cols-2 px-12 py-30'>
                        <div className=''>
                    <div className='w-100 h-100 '>
                         <img src={Hung} alt="" className='w-100 h-90 object-cover object-center  mt-30 rounded'/>
                    </div>
                     <div className='w-70 h-50 -mt-70'>
                         <img src={Hun} alt="" className='w-60 h-50 object-cover object-center mt-20 ml-30 rounded'/>
                    </div>
                  </div>
            <div className='mt-16 h-120 md:'>
             <h1 className='text-3xl md:text-5xl font-bold  font-serif px-6 py-16 text-white'> “Happiness starts here <br /> one bite at a time.</h1>
             <p className='-mt-12 px-5 font-serif text-gray-200'>We serve more than pastries — we share joy in every crumb. <br />From online orders to artisan bakers, every bite feels like home.</p>
               {/* button */}
            <button className='w-40 h-12 mt-6 mx-6 rounded-full bg-amber-300 text-gray-900 font-bold flex items-center justify-between px-2 hover:bg-amber-400 transition-all'>
      <span className='pl-3'>Order Now</span>
      <div className='w-9 h-9 bg-black rounded-full flex items-center justify-center'>
        <ArrowUpIcon className='w-5 h-5 text-white' />
      </div>
    </button>
            </div>
                    
                  

        </div>
    </div>
    </div>
    </>
  )
}
