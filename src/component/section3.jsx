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
                   <div className='relative w-full px-4 md:px-8 py-8 md:py-16'>
  {/* Main Image - Larger, with subtle border */}
  <div className='relative w-full md:w-4/5 h-72 md:h-[500px] ml-auto'>
    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-2'></div>
    <img 
      src={Hung} 
      alt="" 
      className='relative w-full h-full object-cover object-center rounded-2xl shadow-2xl border-4 border-white'
    />
  </div>
  
  {/* Overlapping Image - Stylish offset with decorative elements */}
  <div className='relative w-11/12 md:w-3/5 h-56 md:h-80 mt-6 md:-mt-48 md:ml-0 z-10'>
    <div className='absolute -inset-2 bg-gradient-to-tr from-amber-400/30 to-rose-400/30 rounded-2xl transform -rotate-3 blur-sm'></div>
    <img 
      src={Hun} 
      alt="" 
      className='relative w-full h-full object-cover object-center rounded-2xl shadow-2xl border-4 border-white'
    />
    
    {/* Decorative accent */}
    <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl hidden md:block'></div>
  </div>
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
