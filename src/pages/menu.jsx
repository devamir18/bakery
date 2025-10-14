import Cake3 from "../assets/images/cakes3.jpg"
import Cake2 from "../assets/images/cakes2.jpg"
import Cho from "../assets/images/cho.jpg"
import Mid from "../assets/images/mid.jpg"
import Ccake from "../assets/images/ccake.jpg"

export default function menu () {


  return (
    <>
      <div className='w-full min-h-screen bg-[#855c33] pb-8'>
        <div className='py-20 md:py-40 flex flex-col md:flex-row justify-between items-center md:items-start px-4'>
            <h1 className='text-2xl md:text-5xl font-bold font-serif text-[#f1e7d8] px-4 md:px-12 mb-4 md:mb-0'>Our Menu</h1>
            <div className="w-full md:w-100 h-20 flex justify-center items-center gap-2">
          <button className="w-20 h-10 rounded font-semibold text-[#855c33] bg-[#f1e7d8]">Cake</button>
           <button className="w-20 h-10 rounded font-semibold text-[#855c33] bg-[#f1e7d8]">Other</button>

        </div>
        </div>
            <div className='w-full h-auto border-2 border-[#f1e7d8] mx-4 md:m-auto max-w-5xl rounded-2xl md:-mt-20 mt-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-4 md:px-12 py-6 md:mt-3'>
                  <div className='h-auto rounded'>
                    <img src={Cake3} alt="" className="h-40 w-40 object-center object-cover m-auto rounded-full"/>
                    <div className="">
                        <h2 className="text-center font-serif text-md text-[#f1e7d8] mt-2">Redberry Bliss</h2>
                        <p className="text-center font-serif text-sm text-[#f1e7d8] px-2">Rich, moist chocolate cake with smooth frosting</p>
                    </div>
                    <div className="flex justify-center mt-3">
                      <button className="w-35 h-10 rounded text-[#855c33] bg-[#f1e7d8] hover:scale-105 transition-transform">Order</button>
                    </div>
                  </div>
                  <div className='h-auto rounded'>
                    <img src={Cake2} alt="" className="h-40 w-40 object-center object-cover m-auto rounded-full"/>
                    <div className="">
                        <h2 className="text-center font-serif text-md text-[#f1e7d8] mt-2">Pinkberry Bliss</h2>
                         <p className="text-center font-serif text-sm text-[#f1e7d8] px-2">Rich, moist chocolate cake with smooth frosting</p>
                          <div className="flex justify-center mt-3">
                      <button className="w-35 h-10 rounded text-[#855c33] bg-[#f1e7d8] hover:scale-105 transition-transform">Order</button>
                    </div>
                    </div>
                  </div>
                  <div className='h-auto rounded'>
                    <img src={Cho} alt="" className="h-40 w-40 object-center object-cover m-auto rounded-full"/>
                    <div className="">
                        <h2 className="text-center font-serif text-md text-[#f1e7d8] mt-2">Chocoberry Bliss</h2>
                         <p className="text-center font-serif text-sm text-[#f1e7d8] px-2">Rich, moist chocolate cake with smooth frosting</p>
                          <div className="flex justify-center mt-3">
                      <button className="w-35 h-10 rounded text-[#855c33] bg-[#f1e7d8] hover:scale-105 transition-transform">Order</button>
                    </div>
                    </div>
                  </div>
                  <div className='h-auto rounded'>
                    <img src={Ccake} alt="" className="h-40 w-40 object-center object-cover m-auto rounded-full"/>
                    <div className="">
                        <h2 className="text-center font-serif text-md text-[#f1e7d8] mt-2">Blueberry Bliss</h2>
                         <p className="text-center font-serif text-sm text-[#f1e7d8] px-2">Rich, moist chocolate cake with smooth frosting</p>
                          <div className="flex justify-center mt-3">
                      <button className="w-35 h-10 rounded text-[#855c33] bg-[#f1e7d8] hover:scale-105 transition-transform">Order</button>
                    </div>
                    </div>
                  </div>

                </div>
            </div>
      </div>
    
    </>
  )
}