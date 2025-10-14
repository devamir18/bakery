import React, { useEffect, useRef } from 'react';
import Chef2 from "../assets/images/chef2.png"

export default function BakeryHero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-amber-200 rounded-full opacity-0';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
        particle.style.animationDelay = Math.random() * 3 + 's';
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen  bg-amber-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-amber-800 rounded-full opacity-30 -top-20 -left-20 animate-float"></div>
        <div className="absolute w-64 h-64 bg-amber-800 rounded-full opacity-20 top-1/2 -right-10 animate-float-delayed"></div>
        <div className="absolute w-72 h-72 bg-amber-800 rounded-full opacity-25 bottom-0 left-1/3 animate-float-slow"></div>
        <div className="absolute w-80 h-80 bg-orange-800 rounded-full opacity-20 top-1/4 right-1/4 animate-float-delayed-2"></div>
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0"></div>

      {/* Hero Content */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mt-30 ">
        <div className='bg-red-90 m-auto'>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-6 px-20 animate-fade-in-up leading-tight">
           Excellent Bakes <br />
          Freshly Baked Daily
        </h1>
       <p className='px-20 -mt-4 text-gray-100'>Freshly baked every morning with love, passion, <br /> and a touch of heritage</p>
       <div className='flex gap-4 px-20 mt-4 '>
            <button className='w-34 h-10 bg-amber-950 rounded text-white '>Shop Our Bakes</button>
             <button className='w-30 h-10 border-1 border-amber-950 text-white rounded'>Visit Us  Now</button>
       </div>
        </div>
        <div className='m-auto '>
          <img src={Chef2} alt="" className='-mt-14'/>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        .animate-float-delayed {
          animation: float 15s infinite ease-in-out;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float 25s infinite ease-in-out;
          animation-delay: 4s;
        }

        .animate-float-delayed-2 {
          animation: float 18s infinite ease-in-out;
          animation-delay: 1s;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.9s both;
        }
      `}</style>
    </section>
    
  );
}