import React, { useEffect, useState } from 'react'
import { Home, Menu ,Info, Image,Contact } from 'lucide-react';
import { Link } from "react-router-dom";


export default function Header () {

     const [open,setOpen]= useState(false);
     const [scrolled, setScrolled] =useState(false);
     const handleCancel = () => setOpen(false)
     


useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 100); 
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
    {/* Mobile nav */}
        <div className='md:hidden px-2 py-1 shadow '>
            <button
            onClick={() => {setOpen(true)}}
            >
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"  className='size-10 '><path fill="#45413c" d="M3.88 45.11a20.12 1.89 0 1 0 40.24 0a20.12 1.89 0 1 0-40.24 0" opacity="0.15"/><path fill="#b89558" d="M23.37 7.15c-9.53 0-16 2.83-19.49 6.92L16.46 31l7.54-.34V45.5l16.92-4a2.52 2.52 0 0 0 1.94-2.45V25.9a8.9 8.9 0 0 1 1.38-4.58a8.05 8.05 0 0 0 1.13-4.48c-.37-7.66-14.02-9.69-22-9.69"/><path fill="#debb7e" d="M43.87 22c.11-.22.24-.45.37-.67a8.05 8.05 0 0 0 1.13-4.48c-.35-7.66-14-9.69-22-9.69c-9.53 0-16 2.83-19.49 6.92l8.73 11.77h1s9-8.49 18.65-9.85c6.68-1 11.93-.36 11.61 6"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M23.37 7.15c-9.53 0-16 2.83-19.49 6.92L16.46 31l7.54-.34V45.5l16.92-4a2.52 2.52 0 0 0 1.94-2.45V25.9a8.9 8.9 0 0 1 1.38-4.58a8.05 8.05 0 0 0 1.13-4.48c-.37-7.66-14.02-9.69-22-9.69" stroke-width="1"/><path fill="#f7e5c6" d="M26.51 22.85A8.08 8.08 0 0 0 20.28 15L8.8 12.31a4.86 4.86 0 0 0-6.17 4.53a8.05 8.05 0 0 0 1.13 4.48a8.9 8.9 0 0 1 1.38 4.58v13.2a2.51 2.51 0 0 0 1.94 2.45L24 45.5V30a5.94 5.94 0 0 1 1.31-3.88a5 5 0 0 0 1.2-3.27"/><path fill="#fff5e3" d="M3.47 19.35a4.58 4.58 0 0 1 5.73-4.52l10.68 2.68a8 8 0 0 1 5.8 7.86a2 2 0 0 1 0 .26a4.87 4.87 0 0 0 .86-2.78A8.08 8.08 0 0 0 20.28 15L8.8 12.31a4.86 4.86 0 0 0-6.17 4.53a8 8 0 0 0 .94 4.09a8 8 0 0 1-.1-1.58"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M26.51 22.85A8.08 8.08 0 0 0 20.28 15L8.8 12.31a4.86 4.86 0 0 0-6.17 4.53a8.05 8.05 0 0 0 1.13 4.48a8.9 8.9 0 0 1 1.38 4.58v13.2a2.51 2.51 0 0 0 1.94 2.45L24 45.5V30a5.94 5.94 0 0 1 1.31-3.88a5 5 0 0 0 1.2-3.27" stroke-width="1"/></svg>
           {open &&(
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M7 20V9S3 4 9.5 4H17c7 0 3 5 3 5v9a2 2 0 0 1-2 2z"/><path d="M7 20H6a2 2 0 0 1-2-2V9S0 4 6.5 4H10"/></g></svg>
           )}
           </button>
        </div>
     { open && (

    <div className='md:hidden h-100 bg-[#855c33] w-70 mt-2 rounded-r-xl fixed z-50 ' >
        {/* header */}
        <div className='px-4  '>
            <h1 className='text-2xl font-bold font-serif text-white py-10'>Heritage</h1>
          <h1 className='text-2xl font-bold font-serif text-white px-8 -mt-10'>Bakery</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className='size-10 -mt-10 -ml-2 '><path fill="#bc7535" d="M322.927 70.687c-10.48 0-20.778.501-30.82 1.473H175.32v.197l-.419.014q-1.995.058-3.98.138c-.525.022-1.047.05-1.571.075c-.936.043-1.873.086-2.805.137c-.6.033-1.197.073-1.796.109c-.852.052-1.704.102-2.552.161q-.94.067-1.877.139q-1.226.09-2.447.189q-.959.081-1.915.168q-1.19.105-2.374.218q-.97.096-1.938.196q-1.166.12-2.327.247a336 336 0 0 0-4.232.501a299 299 0 0 0-8.37 1.174q-.945.146-1.888.298q-1.13.184-2.254.376q-.927.156-1.849.319q-1.135.203-2.264.414q-.904.166-1.803.337c-.765.147-1.525.301-2.285.454c-.58.117-1.161.231-1.739.352q-1.185.25-2.363.508c-.539.117-1.081.232-1.618.352c-.871.195-1.734.399-2.599.602c-.445.105-.893.205-1.336.312a252 252 0 0 0-3.871.963l-.221.059q-1.83.472-3.64.97c-.433.119-.86.244-1.292.365c-.839.236-1.679.471-2.511.714c-.502.147-.998.299-1.497.449q-1.131.336-2.252.682q-.794.25-1.583.503q-1.063.337-2.119.682c-.539.177-1.073.36-1.609.54q-1.027.345-2.045.698q-.808.283-1.609.57q-1 .356-1.991.72a232 232 0 0 0-5.135 1.969a204 204 0 0 0-6.879 2.888q-.935.415-1.861.837q-.746.338-1.487.681q-.928.434-1.848.876q-.723.344-1.44.693c-.624.306-1.241.617-1.859.929c-.455.229-.913.457-1.364.689c-.642.331-1.276.668-1.91 1.005c-.416.221-.836.439-1.249.662q-1.047.57-2.078 1.151c-.338.189-.681.375-1.016.566a156 156 0 0 0-3.029 1.767C24.108 122.649 5.017 150.08 3.571 179.983l-.012.213a75 75 0 0 0-.086 3.453c0 27.939 16.526 52.665 41.763 63.484v139.901c0 30.069 24.463 54.533 54.533 54.533h169.374c1.046 0 2.083-.037 3.115-.095c.244-.014.486-.038.729-.056q1.227-.084 2.44-.223q.316-.038.631-.08a53 53 0 0 0 2.607-.396q.185-.032.368-.066a54 54 0 0 0 2.958-.628h125.623c30.069 0 54.533-24.463 54.533-54.532V245.589c25.236-10.818 41.763-35.544 41.763-63.483c-.001-67.685-71.041-111.419-180.983-111.419"/><path fill="#fcdea2" d="M356.302 183.649c0-63.753-69.775-102.283-171.847-102.283c-100.109 0-169.143 44.97-171.761 99.091l-.009.159a67 67 0 0 0-.077 3.033c0 26.772 17.546 49.438 41.763 57.148v146.237c0 25.072 20.325 45.397 45.397 45.397h169.374c25.072 0 45.397-20.325 45.397-45.397V240.797c24.217-7.71 41.763-30.377 41.763-57.148"/></svg>
          <button className='float-right -mt-25 text-[#f1e7d8]'  onClick={handleCancel}>
           
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
          </button>
        </div>
           {/* unordered list */}
        <div className='flex flex-cols'>
            <div className='text-white'>
                 < Home className='size-6 mt-10 mx-4'/>  
                 <Menu className='size-6 mt-4 mx-4'/>  
                 <Info className='size-6 mt-4 mx-4'/>
                 <Image className='size-6 mt-4 mx-4'/>
                 <Contact className='size-6 mt-4 mx-4'/>
            </div>
            <ul className='-ml-2 py-10 space-y-4 text-[#f1e7d8] font-semibold block hover:text-amber-400 cursor-pointer'>
            <li >Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Contact</li>
            </ul>
        </div>
        {/* order button */}
        <div className='-mt-4 m-4 float-right'>
            <button className='w-25 h-10  rounded-full bg-amber-800  font-bold text-white hover:scale-105'>Order</button>

        </div>
         
    </div>
    )}


  <div
  className={`hidden md:block fixed top-0 left-0 w-full p-4 z-50 transition-colors duration-300 ${
    scrolled ? "bg-[#855c33]  text-[#f1e7d8] shadow-md" : "bg-transparent text-white" 
  }`}
>

        <div className='flex items-start justify-start'>
          <div className='flex '>
             <h1 className='text-2xl font-bold font-serif text-white py-4 px-6'>Heritage</h1>
          <h1 className='text-2xl font-bold font-serif text-white mt-10 -ml-25 '>Bakery</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className='size-10  -ml-30 mt-10'><path fill="#bc7535" d="M322.927 70.687c-10.48 0-20.778.501-30.82 1.473H175.32v.197l-.419.014q-1.995.058-3.98.138c-.525.022-1.047.05-1.571.075c-.936.043-1.873.086-2.805.137c-.6.033-1.197.073-1.796.109c-.852.052-1.704.102-2.552.161q-.94.067-1.877.139q-1.226.09-2.447.189q-.959
          .081-1.915.168q-1.19.105-2.374.218q-.97.096-1.938.196q-1.166.12-2.327.247a336 336 0 0 0-4.232.501a299 299 0 0 0-8.37 1.174q-.945.146-1.888.298q-1.13.184-2.254.376q-.927.156-1.849.319q-1.135.203-2.264.414q-.904.166-1.803.337c-.765.147-1.525.301-2.285.454c-.58.117-1.161.231-1.739.352q-1.185.25-2.363.508c-.539.117-1.081.232-1.618.352c-.871.195-1.734.399-2.599.602c-.445.105-.893.205-1.336.312a252 252 0 0 0-3.871.963l-.221.059q-1.83.472-3.64.97c-.433.119-.86.244-1.292.365c-.839.236-1
          .679.471-2.511.714c-.502.147-.998.299-1.497.449q-1.131.336-2.252.682q-.794.25-1.583.503q-1.063.337-2.119.682c-.539.177-1.073.36-1.609.54q-1.027.345-2.045.698q-.808.283-1.609.57q-1 .356-1.991.72a232 232 0 0 0-5.135 1.969a204 204 0 0 0-6.879 2.888q-.935.415-1.861.837q-.746.338-1.487.681q-.928.434-1.848.876q-.723.344-1.44.693c-.624.306-1.241.617-1.859.929c-.455.229-.913.457-1.364.689c-.642.331-1.276.668-1.91 1.005c-.416.221-.836.439-1.249.662q-1.047.57-2.078 1.151c-.338.189-.681.375-
          1.016.566a156 156 0 0 0-3.029 1.767C24.108 122.649 5.017 150.08 3.571 179.983l-.012.213a75 75 0 0 0-.086 3.453c0 27.939 16.526 52.665 41.763 63.484v139.901c0 30.069 24.463 54.533 54.533 54.533h169.374c1.046 0 2.083-.037 3.115-.095c.244-.014.486-.038.729-.056q1.227-.084 2.44-.223q.316-.038.631-.08a53 53 0 0 0 2.607-.396q.185-.032.368-.066a54 54 0 0 0 2.958-.628h125.623c30.069 0 
          54.533-24.463 54.533-54.532V245.589c25.236-10.818 41.763-35.544 41.763-63.483c-.001-67.685-71.041-111.419-180.983-111.419"/><path fill="#fcdea2" d="M356.302 183.649c0-63.753-69.775-102.283-171.847-102.283c-100.109 0-169.143 44.97-171.761 99.091l-.009.159a67 67 0 0 0-.077 3.033c0 26.772 17.546 49.438 41.763 57.148v146.237c0 25.072 20.325 45.397 45.397 45.397h169.374c25.072 0 45.397-20.325 45.397-45.397V240.797c24.217-7.71 41.763-30.377 41.763-57.148"/></svg>
          </div>
        </div>
        <div className='flex justify-center items-center -mt-13'>
             <ul className='space-x-14 text-white font-serif flex '>
            <Link to="/" className='hover:text-gray-300'>Home</Link>
            <Link to="/menu" className='hover:text-gray-300'>Menu</Link>
            <Link to="/About" className='hover:text-gray-300'>About Us</Link>
            <Link to="/gallery" className='hover:text-gray-300'>Gallery</Link>
            <Link to="/contact" className='hover:text-gray-300'>Contact</Link>
            </ul>
        </div>
               <div className='flex items-end justify-end -mt-7 '>
                 <Link to="/order" className='w-25 h-10 border-2 border-amber-200 py-1 text-center  font-semibold rounded'>Order Now</Link>
               </div>
    </div>

   </>
   
  );
}
