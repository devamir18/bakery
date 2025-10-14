import React, { useState } from 'react';


export default function OrderPage() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const products = [
    { id: 1, name: 'Chocolate Cake', price: 2500, category: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', description: 'Rich chocolate layer cake' },
    { id: 2, name: 'Vanilla Cake', price: 2200, category: 'Cakes', image: 'https://images.unsplash.com/photo-1588195538326-c5b1e5b80e16?w=400', description: 'Classic vanilla sponge' },
    { id: 3, name: 'Croissant', price: 500, category: 'Pastries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', description: 'Buttery flaky pastry' },
    { id: 4, name: 'White Bread', price: 800, category: 'Bread', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', description: 'Fresh daily bread' },
    { id: 5, name: 'Whole Wheat Bread', price: 900, category: 'Bread', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400', description: 'Healthy wheat bread' },
    { id: 6, name: 'Chocolate Chip Cookies', price: 300, category: 'Cookies', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400', description: 'Pack of 6 cookies' },
    { id: 7, name: 'Donut Assorted', price: 400, category: 'Donuts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', description: 'Glazed donuts' },
    { id: 8, name: 'Banana Bread', price: 1200, category: 'Bread', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400', description: 'Moist banana loaf' },
  ];

  const categories = ['All', 'Cakes', 'Bread', 'Pastries', 'Cookies', 'Donuts'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className='min-h-screen bg-[#855c33] '>
      <div className='bg-[#855c33] text-white px-4 md:px-16 shadow-2xl py-40'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold font-serif mb-2'>Order Now</h1>
          <p className='text-amber-200 text-lg'>Fresh baked goods delivered to your door</p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <div className='mb-8'>
              <div className='flex flex-wrap gap-3'>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/50 scale-105'
                        : 'bg-white/10 text-amber-200 hover:bg-white/20 border border-amber-700/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {filteredProducts.map(product => (
                <div 
                  key={product.id}
                  className='group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/50 hover:-translate-y-1'
                >
                  <div className='relative h-48 overflow-hidden'>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#855c33] via-transparent to-transparent opacity-60'></div>
                    <div className='absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg'>
                      ₦{product.price}
                    </div>
                  </div>

                 
                  <div className='p-5'>
                    <h3 className='text-xl font-bold text-[#f1e7d8] mb-2 group-hover:text-amber-300 transition-colors'>
                      {product.name}
                    </h3>
                    <p className='text-amber-200 text-sm mb-4'>{product.description}</p>
                    
                    <button
                      onClick={() => addToCart(product)}
                      className='w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='sticky top-8'>
              <div className='bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl'>
                <h2 className='text-2xl font-bold text-[#f1e7d8] mb-6 flex items-center gap-3'>
                  <span className='text-3xl'>🛒</span>
                  Your Cart
                </h2>

                {cart.length === 0 ? (
                  <div className='text-center py-12'>
                    <div className='text-6xl mb-4 opacity-50'>🥐</div>
                    <p className='text-amber-200'>Your cart is empty</p>
                    <p className='text-amber-300/70 text-sm mt-2'>Add some delicious items!</p>
                  </div>
                ) : (
                  <>
                    
                    <div className='space-y-4 mb-6 max-h-96 overflow-y-auto'>
                      {cart.map(item => (
                        <div 
                          key={item.id}
                          className='bg-white/5 rounded-xl p-4 border border-amber-700/30 hover:border-amber-500/50 transition-all'
                        >
                          <div className='flex items-center gap-4'>
                            <img 
                              src={item.image}
                              alt={item.name}
                              className='w-16 h-16 rounded-lg object-cover'
                            />
                            <div className='flex-1'>
                              <h4 className='text-[#f1e7d8] font-semibold'>{item.name}</h4>
                              <p className='text-amber-400 text-sm'>₦{item.price}</p>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className='flex items-center justify-between mt-3'>
                            <div className='flex items-center gap-2 bg-white/10 rounded-lg p-1'>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className='w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-bold transition-colors'
                              >
                                −
                              </button>
                              <span className='w-8 text-center text-white font-semibold'>{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className='w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-bold transition-colors'
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className='text-red-400 hover:text-red-300 font-semibold text-sm transition-colors'
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='border-t border-amber-700/50 pt-4 mb-6'>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-amber-200'>Subtotal</span>
                        <span className='text-[#f1e7d8] font-semibold'>₦{totalPrice.toLocaleString()}</span>
                      </div>
                      <div className='flex justify-between items-center mb-4'>
                        <span className='text-amber-200'>Delivery</span>
                        <span className='text-[#f1e7d8] font-semibold'>₦500</span>
                      </div>
                      <div className='flex justify-between items-center text-xl font-bold'>
                        <span className='text-[#f1e7d8]'>Total</span>
                        <span className='text-amber-400'>₦{(totalPrice + 500).toLocaleString()}</span>
                      </div>
                    </div>
                    <button className='w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105'>
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}