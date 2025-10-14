import React from 'react';

// Define the component and the data inside it, as provided.
export default function Gallery() {
    const galleryItems = [
        { id: 1, imageSrc: '', title: 'Artisan Bread', description: 'Hand-crafted daily' },
        { id: 2, imageSrc: 'https://via.placeholder.com/400x300/AAAAAA/FFFFFF?text=Item+2', title: 'Chocolate Croissant', description: 'Flaky & rich' },
        { id: 3, imageSrc: 'https://via.placeholder.com/500x700/BBBBBB/FFFFFF?text=Item+3', title: 'Espresso Delight', description: 'Perfect coffee' },
        { id: 4, imageSrc: 'https://via.placeholder.com/300x500/DDDDDD/FFFFFF?text=Item+4', title: 'Seasonal Tart', description: 'Fresh fruit' },
        { id: 5, imageSrc: 'https://via.placeholder.com/700x400/EEEEEE/FFFFFF?text=Item+5', title: 'Vanilla Bean Cake', description: 'Layered perfection' },
        { id: 6, imageSrc: 'https://via.placeholder.com/400x600/FFDDDD/FFFFFF?text=Item+6', title: 'Breakfast Scones', description: 'Warm & fluffy' },
        { id: 7, imageSrc: 'https://via.placeholder.com/600x350/CCAAAA/FFFFFF?text=Item+7', title: 'Macarons', description: 'Colorful assortment' },
        { id: 8, imageSrc: 'https://via.placeholder.com/350x500/AACCFF/FFFFFF?text=Item+8', title: 'Glazed Donuts', description: 'Sweet treats' },
        { id: 9, imageSrc: 'https://via.placeholder.com/500x500/FFEECC/FFFFFF?text=Item+9', title: 'Cheesecake', description: 'Creamy classic' },
        { id: 10, imageSrc: 'https://via.placeholder.com/400x400/CCFFCC/FFFFFF?text=Item+10', title: 'Lemon Bars', description: 'Tangy delight' },
        { id: 11, imageSrc: 'https://via.placeholder.com/700x300/FFFFCC/FFFFFF?text=Item+11', title: 'Cupcakes', description: 'Frosted fun' },
        { id: 12, imageSrc: 'https://via.placeholder.com/500x600/FFCCEE/FFFFFF?text=Item+12', title: 'Pistachio Muffin', description: 'Nutty goodness' },
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