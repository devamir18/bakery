import React from 'react';
import Bred from "../assets/images/bred.jpg"
import Cho from "../assets/images/cho.jpg"
import  Cake  from "../assets/images/cake.jpg"
import Cake2 from  "../assets/images/cakes2.jpg"
import Berr from "../assets/images/berr.jpg"
import Ccake from "../assets/images/ccake.jpg"
import Cake3 from "../assets/images/cakes3.jpg"
import Mido from "../assets/images/mido.png"
import Sam from "../assets/images/sam.jpg"
import Sam2 from "../assets/images/sam2.jpg"
import Samp from "../assets/images/samp.jpg"
// Define the component and the data inside it, as provided.
export default function Gallery() {
    const galleryItems = [
         {
            id: 1,
            imageSrc: Bred, // or "path/to/image.jpg"
            title: "Croissants",
            description: "Buttery, flaky perfection"
        },
        {
            id: 2,
            imageSrc: Ccake,
            title: "Chocolate Éclair",
            description: "Rich chocolate heaven"
        },
        {
            id: 3,
            imageSrc: Cake3,
            title: "Artisan Sourdough",
            description: "Freshly baked daily"
        },
        {
            id: 4,
            imageSrc: Berr,
            title: "French Macarons",
            description: "Delicate and colorful"
        },
        {
            id: 5,
            imageSrc:Samp,
            title: "Red Velvet Cake",
            description: "Moist and decadent"
        },
        {
            id: 6,
            imageSrc: Sam,
            title: "Cinnamon Rolls",
            description: "Warm and gooey"
        },
        {
            id: 7,
            imageSrc: Sam2,
            title: "Fruit Tarts",
            description: "Fresh seasonal fruits"
        },
        {
            id: 8,
            imageSrc: Mido,
            title: "Tiramisu",
            description: "Italian classic"
        },
        {
            id: 9,
            imageSrc: Bred,
            title: "Baguette",
            description: "Crispy crust, soft inside"
        },
        {
            id: 10,
            imageSrc:Cho ,
            title: "Cheesecake",
            description: "Creamy perfection"
        },
        {
            id: 11,
            imageSrc:Cake2,
            title: "Danish Pastries",
            description: "Sweet and flaky"
        },
        {
            id: 12,
            imageSrc:Cake ,
            title: "Brownies",
            description: "Fudgy chocolate bliss"
        }
       
    ];

    // --- Color Variables ---
    const BG_PRIMARY = '#855c33'; // Deep cocoa brown
    const ACCENT_CREAM = '#f1e7d8'; // Creamy off-white
    const OVERLAY_DARK = 'rgba(28, 28, 28, 0.6)'; // Dark transparent overlay

    // --- Bento Grid Sizing ---
    const bentoSizes = [
        'col-span-2 row-span-2', // Large
        'col-span-1 row-span-1',
        'col-span-1 row-span-2', // Tall
        'col-span-2 row-span-1', // Wide
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-2 row-span-1', // Wide
        'col-span-1 row-span-1',
        'col-span-1 row-span-2', // Tall
        'col-span-2 row-span-1', // Wide
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
    ];

    return (
        <div style={{ backgroundColor: BG_PRIMARY }} className="min-h-screen text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                
                {/* Gallery Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight leading-none" style={{ color: ACCENT_CREAM }}>
                        Our Culinary Creations 👨‍🍳
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl font-light max-w-3xl mx-auto" style={{ color: ACCENT_CREAM }}>
                        Explore a collection of our finest pastries, breads, and delightful desserts. Every item crafted with passion and precision.
                    </p>
                </div>

                {/* Bento Grid Container */}
                <div className="grid gap-6 md:gap-8 auto-rows-[150px] md:auto-rows-[200px] grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                    {galleryItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            // Apply dynamic grid sizing for a Bento effect
                            className={`relative group overflow-hidden rounded-xl shadow-xl transform transition-all duration-300 ease-out hover:scale-[1.03] ${bentoSizes[index % bentoSizes.length]}`}
                        >
                            <img 
                                src={item.imageSrc} 
                                alt={item.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" 
                            />
                            
                            {/* Overlay for text and subtle effect */}
                            <div 
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition duration-300 flex items-end p-4 md:p-6"
                                style={{ backgroundColor: OVERLAY_DARK }} // Use custom overlay color
                            >
                                <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <h3 className="font-bold text-xl md:text-2xl leading-tight mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base opacity-80">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}