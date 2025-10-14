import React from 'react'
import Pexel from "../assets/images/pexel.jpg"
import Cho from "../assets/images/cho.jpg"

export default function Comment5  () {
  return (
    <>
       <div className='w-full h-[530px] bg-[#855c33]'>
        <div className='w-full h-[500px] rounded-2xl md:max-w-7xl  m-auto relative flex justify-end items-center px-4 py-12'>
          <img src={Cho} alt="" className='w-full h-full object-center object-cover rounded-2xl '/>
                 <div className='w-full absolute  md:w-2/6 h-70 bg-white/10 backdrop:blur-3xl border-2 border-[#855c33] m-4  rounded-4xl'>
                     {/* Header */}
                     <h1 className='text-2xl font-bold text-center py-6 font-serif text-[#f1e7d8]'>Place order</h1>
                     <hr className='w-full -mt-7 text-[#855c33]'/>
                     <div className='flex '>
                      <form>
                        <div className='mt-8'>
                          <p className='font-semibold text-white px-12 '>Select order</p>
                       <input type="text" name="order" id="" placeholder='' className='w-80 h-10 bg-[#f1e7d8] rounded mx-12'/>
                        </div>
                        <div className='mt-3'>
                          <p className='font-semibold text-white px-12 '>Select</p>
                       <input type="text" name="order" id="" placeholder='' className='w-80 h-10 bg-[#f1e7d8] rounded mx-12'/>
                        </div>
                        <div className='flex justify-end m-2 px-12'>
                          <button className='w-20 h-10  rounded bg-white/10 backdrop:blur-2xl border-2 border-[#855c33] font-semibold text-[#f1e7d8] hover:scale-95'>Submit</button>
                        </div>

                      </form>

                     </div>
                 </div>
        </div>

       </div>
    
    </>
  )
}
