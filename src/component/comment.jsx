import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import Odo from "../assets/images/odo.jpg"

export default function Comment () {
       
    const [show ,setShow] = useState (false);
   const testimonials = [
        {
            id: 1,
            name: "Sarah Moses",
            daysAgo: 3,
            quote: "The croissants here are absolutely amazing! Fresh, buttery, and perfectly flaky. I come here every morning for my coffee and pastry. Highly recommend!",
            stars: 5,
            image: Odo,
            position: 'start' 
        },
        {
            id: 2,
            name: "James Johnson",
            daysAgo: 2,
            quote: "This is the best pastry shop in the city, hands down. The bread is soft, the cakes are divine, and the staff is always so cheerful and welcoming!",
            stars: 5,
            image: Odo,
            position: 'end' 
        },
         {
    id: 3, 
    quote: "Every bite truly tastes like love! The pastries are always fresh, soft, and full of rich flavor. You can tell they’re made with care and passion. From the first bite to the last crumb, everything feels homemade and special — this is without a doubt my favorite bakery in town",
    name: "charles",
    image: Odo, 
    daysAgo: 7,
    position: 'start' 
  },
  {
    id: 4,
    quote: "can’t get enough of their treats! Every visit feels special — the smell alone makes you smile, and the taste keeps you coming back for more. Everything is beautifully presented, made with care, and you can truly feel the love in every bite. This bakery has become my happy place",
    name: "Ephraim", 
    image: Odo,
    daysAgo: 2,
    position: 'end' 
  }
     
    ];

    const displayedTestimonials = show ? testimonials.slice(-1) : testimonials.slice(0,1);
     console.log('Show state:', show);
    console.log('Total testimonials:', testimonials.length);
    console.log('Displayed testimonials:', displayedTestimonials.length);
    console.log('Displayed IDs:', displayedTestimonials.map(t => t.id));


    
   
    const BG_COCOA = '#855c33';
    const ACCENT_CREAM = '#f1e7d8';
    const TEXT_LIGHT = 'white';

  return (
    <>
   <div className='py-20 md:py-32 overflow-hidden' style={{ backgroundColor: BG_COCOA }}>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>

            <div className='text-center mb-16 md:mb-24'>
                <p className={`text-lg font-serif mb-4`} style={{ color: ACCENT_CREAM }}>
                    Real voice. Honest praise.
                </p>
                <h2 className='text-5xl md:text-6xl font-black text-white tracking-tighter leading-none'>
                    Sweet Words from Our Guests 
                </h2>
            </div>
            
            <div className='relative'>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16  justify-center items-center'>
                    
                    {displayedTestimonials.map((review) => (
                        <div 
                            key={review.id}
                            className={`flex justify-center ${review.position === 'end' ? 'md:mt-20' : ''}`}
                        >
                            <div className='w-full max-w-md bg-amber-750/10 rounded-3xl   shadow-2xl p-6 md:p-8 transform transition duration-300 hover:shadow-3xl relative'>
                                
                                
                                <span 
                                    className='absolute top-0 left-4 text-6xl font-black opacity-10' 
                                    style={{ color: BG_COCOA }}
                                >
                                    “
                                </span>

                                <p className='text-[#f1e7d8] italic leading-relaxed text-lg mb-6 pt-4'>
                                    {review.quote}
                                </p>

                                {/* User Info */}
                                <div className='flex items-center gap-4 border-t pt-4'>
                                    <img 
                                        src={review.image}
                                        alt={`User ${review.name}`} 
                                        className='w-14 h-14 rounded-full object-cover border-2 border-amber-400'
                                    />
                                    <div>
                                        <h3 className='font-bold text-lg text-gray-800'>{review.name}</h3>
                                        <div className='flex items-center gap-1'>
                                            <p className='text-xs text-gray-400 ml-2'>— {review.daysAgo} days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='absolute top-1/2 -left-16 transform -translate-y-1/2 hidden lg:flex'>
           <button 
            onClick={() => setShow(!show)}
           style={{ backgroundColor: ACCENT_CREAM, color: BG_COCOA }}
            className='w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:bg-opacity-90'
            >
                 <ArrowLeft className='w-6 h-6' />
                </button>
              </div>
                <div className='absolute top-1/2 -right-16 transform -translate-y-1/2 hidden lg:flex'>
                   <button 
            onClick={() => setShow(!show)}
           style={{ backgroundColor: ACCENT_CREAM, color: BG_COCOA }}
            className='w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:bg-opacity-90'
            >
                <ArrowRight className='w-6 h-6' />
                </button>
                </div>
                 
            </div>
            
           
            <div className='flex justify-center gap-6 mt-12 md:hidden'>
                  <button 
            onClick={() => setShow(!show)}
           style={{ backgroundColor: ACCENT_CREAM, color: BG_COCOA }}
            className='w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:bg-opacity-90'
            >
                 <ArrowLeft className='w-6 h-6' />
                </button>
               <button 
            onClick={() => setShow(!show)}
           style={{ backgroundColor: ACCENT_CREAM, color: BG_COCOA }}
            className='w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:bg-opacity-90'
            >
                <ArrowRight className='w-6 h-6' />
                </button>
            </div>

        </div>
    </div>
    </>
  )
}
