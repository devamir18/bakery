import React from 'react';
// Assuming you have Lucide icons or similar for phone, map, and clock
import { Phone, MapPin, Clock } from 'lucide-react'; 

const ContactPage = () => {
    // Custom colors matching your theme
    const BG_PRIMARY = '#855c33'; // Deep cocoa brown
    const ACCENT_CREAM = '#f1e7d8'; // Creamy off-white
    const FORM_BG = '#6b492b'; // Darker cocoa for card contrast

    return (
        <div style={{ backgroundColor: BG_PRIMARY }} className="min-h-screen py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header Section */}
                <header className="text-center mb-16 md:mb-24">
                    <h1 
                        className="text-5xl md:text-7xl font-black font-serif tracking-tight leading-none" 
                        style={{ color: ACCENT_CREAM }}
                    >
                        Get In Touch
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto text-white opacity-80">
                        We'd love to hear from you. Send us a message or find us using the details below.
                    </p>
                </header>

                {/* Split Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Contact Information */}
                    <div 
                        className="p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden" 
                        style={{ backgroundColor: FORM_BG, color: ACCENT_CREAM }}
                    >
                        {/* Background Image/Texture for Elegance */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <img 
                                src="" 
                                alt="Background texture" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-8 text-white">
                            Visit & Connect
                        </h2>
                        
                        <div className="space-y-8 text-lg relative z-10">
                            
                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: ACCENT_CREAM }} />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 text-white">Our Bakery</h3>
                                    <p>123 Sweet Street, Pastry Lane, New York, NY 10001</p>
                                </div>
                            </div>
                            
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: ACCENT_CREAM }} />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 text-white">Call Us</h3>
                                    <p>+1 (555) BAKERY-01</p>
                                </div>
                            </div>
                            
                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: ACCENT_CREAM }} />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 text-white">Business Hours</h3>
                                    <p>Mon - Sat: 7:00 AM - 6:00 PM</p>
                                    <p>Sun: 8:00 AM - 2:00 PM</p>
                                </div>
                            </div>

                        </div>
                        
                        {/* Map Placeholder */}
                        <div className="mt-12 w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                            <img src="" alt="Map" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="p-8 md:p-12 rounded-2xl shadow-2xl bg-white">
                        <h2 className="text-3xl font-bold mb-8" style={{ color: BG_PRIMARY }}>
                            Send Us a Message
                        </h2>
                        
                        <form className="space-y-6">
                            
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                                />
                            </div>
                            
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                                />
                            </div>
                            
                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    placeholder="I'd like to place a custom order for..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                                />
                            </div>
                            
                            {/* Submit Button (Using your primary theme colors) */}
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 text-white font-semibold rounded-lg shadow-lg transform transition duration-200 hover:scale-[1.01] focus:ring-4 focus:ring-offset-2"
                                style={{ backgroundColor: BG_PRIMARY, borderColor: ACCENT_CREAM, boxShadow: `0 4px 6px -1px rgba(133, 92, 51, 0.5)` }}
                            >
                                Send Message
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;