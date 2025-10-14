import React from 'react';
import Papa from "../assets/images/papa.jpg"
import Paps from "../assets/images/paps.jpg"
import Fry from "../assets/images/fry.jpg"
import Amiy from "../assets/images/amiy.jpg"
import Pap from "../assets/images/pap.jpg"
import Blace from "../assets/images/blace.jpg"

export default function BentoGrid() {
  // Add your imported images to this array
  const images = [
    { id: 1, src: Papa, span: 'col-span-2 row-span-2', alt: 'Chef Odo' },
    { id: 2, src: Pap, span: 'col-span-1 row-span-1', alt: 'Chef Amiy' },
    { id: 3, src: Paps, span: 'col-span-1 row-span-1', alt: 'Chef Od' },
    { id: 4, src: Fry, span: 'col-span-1 row-span-1', alt: 'Gallery image 4' },
    { id: 5, src: Amiy, span: 'col-span-1 row-span-1', alt: 'Gallery image 5' },
    { id: 6, src: Blace, span: 'col-span-2 row-span-1', alt: 'Gallery image 6' },
  ];

  return (
    <div className="min-h-screen bg-[#855c33] p-8 mt-64 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold md:text-5xl  font-serif text-[#f1e7d8] mb-8 py-25 ">The Artisans <br /> of Heritage</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-300px]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`${image.span} rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative bg-gray-200`}
            >
              {image.src ? (
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                  <div className="text-gray-600 text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-semibold">Image {image.id}</p>
                  </div>
                </div>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}