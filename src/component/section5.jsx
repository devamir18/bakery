import React, { useState } from 'react';

export default function Comment5() {
  const [formData, setFormData] = useState({
    orderType: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.orderType && formData.quantity) {
      console.log('Order submitted:', formData);
      alert('Order placed successfully!');
      setFormData({ orderType: '', quantity: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  // Placeholder image - replace with your actual import
  const Cho = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800";

  const orderOptions = [
    'Chocolate Cake',
    'Vanilla Cake',
    'Bread',
    'Croissant',
    'Cookie',
    'Donut'
  ];

  return (
    <div className='w-full bg-[#855c33] py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative flex flex-col md:flex-row justify-between items-center gap-8'>
          
          {/* Image Section */}
          <div className='w-full md:w-1/2 h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl'>
            <img 
              src={Cho} 
              alt="Bakery Product" 
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
            />
          </div>

          {/* Form Section */}
          <div className='w-full md:w-2/5'>
            <div className='bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-[#855c33] p-8 shadow-2xl hover:shadow-3xl transition-all duration-300'>
              
              {/* Header */}
              <h1 className='text-3xl font-bold text-center font-serif text-[#f1e7d8] mb-2'>
                Place Order
              </h1>
              <div className='h-1 w-20 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8'></div>
              
              {/* Form */}
              <div onSubmit={handleSubmit} className='space-y-6'>
                
                {/* Select Order Type */}
                <div>
                  <label className='block font-semibold text-white mb-3'>
                    Select Product
                  </label>
                  <select 
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className='w-full h-10 bg-[#f1e7d8] rounded-lg px-4 font-medium text-[#855c33] cursor-pointer hover:bg-amber-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500'
                  >
                    <option value="">Choose a product...</option>
                    {orderOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className='block font-semibold text-white mb-3'>
                    Quantity
                  </label>
                  <input 
                    type="number" 
                    name="quantity"
                    min="1"
                    max="100"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder='Enter quantity' 
                    className='w-full h-10 bg-[#f1e7d8] rounded-lg px-4 font-medium text-[#855c33] placeholder-amber-700/50 hover:bg-amber-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500'
                  />
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  className='w-full h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-8'
                >
                  Place Order
                </button>
              </div>

              {/* Info Text */}
              <p className='text-center text-amber-200 text-sm mt-6'>
                ✨ Fresh baked, delivered with love
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}