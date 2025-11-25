// import React, { useState } from 'react'

// export default function Auth () {

//     const [show,setShow]= useState(false);

//   return (
//     <>
//        <div className='w-full h-screen bg-[#855c33] pb-8'>
//         <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-40'>
//             <div className='h-full'>
//                 <h1 className='text-3xl text-[#f1e7d8] md:text-5xl font-semibold wrap-break-word py-20 font-serif px-12 leading-tight'>Welcome to Heritage Bakery! We’re so glad you’re here</h1>
//             </div>
//             {/* second div */}
//             <div className='h-auto'>
//                 <div className='w-130 h-90 bg-white/5 backdrop:blur-xl m-auto rounded-xl'>     
//                 {/* form */}
//                {!show &&(
//                  <form className=''>
//                       <h4 className='text-xl px-8 py-8 font-semibold font'>Login to your account</h4>
//                 <p className='px-12 font-semibold text-[#f1e7d8]'>Email:</p>
//                 <input type="text" name="" id="" placeholder='Email' className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 mt-2 text-[#f1e7d8]'/>
                    
//                     <p className='px-12 font-semibold text-[#f1e7d8] py-4'>Password:</p>
//                 <input type="text" name="" id="" placeholder='Password' className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 -mt-4 text-[#f1e7d8]'/>
//                   <div className='flex flex-wrap mx-25'>
//                      <hr className='w-20 mx-3 mt-6'/>
//                 <button className='py-2 text-[#f1e7d8]' onClick={()=> setShow(true)}>Sign-up</button>
//                  <hr className='w-20 mx-3 mt-6'/>
//                   </div>
//                   <div className='flex justify-center items-start mt-4'>
//                     <button className='w-20 h-10 rounded font-semibold text-[#855c33]  bg-amber-100'>Login</button>
//                   </div>
//                 </form>
//                )}
//                   { show &&(
//                      <form className='-mt-12'>     
//                 <p className='px-12 font-semibold py-2 text-[#f1e7d8]'>Email:</p>
//                 <input type="text" name="" id="" placeholder='Email' className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 mt-2 text-[#f1e7d8]'/>
                    
//                     <p className='px-12 font-semibold text-[#f1e7d8] py-4'>Password:</p>
//                 <input type="text" name="" id="" placeholder='Password' className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 -mt-4 text-[#f1e7d8]'/>
//                  <p className='px-12 font-semibold text-[#f1e7d8] py-4'>Phone no</p>
//                 <input type="text" name="" id="" placeholder='Phone no' className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 -mt-4 text-[#f1e7d8]'/>
//                   <div className='flex flex-wrap mx-25'>
//                      <hr className='w-20 mx-3 mt-6'/>
//                 <p className='py-2 text-[#f1e7d8]'>Sign-up</p>
//                  <hr className='w-20 mx-3 mt-6'/>
//                   </div>
//                   <div className='flex justify-center items-start mt-4'>
//                     <button className='w-20 h-10 rounded font-semibold text-[#855c33]  bg-amber-100'>Login</button>
//                   </div>
//                 </form>
                    
//                   )}
                 
//                 </div>

//             </div>

//         </div>
        
//        </div>
//     </>
//   )
// }

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { LogOut } from 'lucide-react';

    // admin page

function AdminDashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Orders', value: '156', icon: '📦', color: 'from-blue-500 to-blue-600' },
    { label: 'Total Revenue', value: '₦245,000', icon: '💰', color: 'from-green-500 to-green-600' },
    { label: 'Products', value: '48', icon: '🍰', color: 'from-purple-500 to-purple-600' },
    { label: 'Customers', value: '89', icon: '👥', color: 'from-orange-500 to-orange-600' },
  ];

  const recentOrders = [
    { id: '#001', customer: 'Musa sati', item: 'Chocolate Cake', amount: '₦2,500', status: 'Delivered' },
    { id: '#002', customer: 'Aman tsoho', item: 'Bread Pack', amount: '₦800', status: 'Pending' },
    { id: '#003', customer: 'Mike tyson', item: 'Croissant', amount: '₦500', status: 'Processing' },
  ];

  const menuItems = [
    { name: 'overview', icon: '📊' },
    { name: 'orders', icon: '📦' },
    { name: 'products', icon: '🍰' },
    { name: 'customers', icon: '👥' }
  ];

  return (
    <div className='flex min-h-screen bg-[#855c33]'>
      
      <div className='w-20 bg-white/10 backdrop-blur-lg border-r border-white/20 flex flex-col items-center py-6 gap-6'>
        
        <div className='text-3xl mb-4'>🥖</div>
        
       
        {menuItems.map(item => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all ${
              activeTab === item.name
                ? 'bg-amber-500 shadow-lg shadow-amber-500/50 scale-110'
                : 'bg-white/5 hover:bg-white/10 hover:scale-105'
            }`}
            title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          >
            {item.icon}
          </button>
        ))}
        
        {/* Logout at bottom */}
        <button 
          onClick={onLogout}
          className='mt-auto w-14 h-14 rounded-xl bg--[#855c33] hover:bg-white/15 backdrop:blur-2xl flex items-center justify-center text-2xl transition-all hover:scale-105'
          title='Logout'
        >
          <LogOut/>
        </button>
      </div>

    
      <div className='flex-1'>
       
        <div className='bg-white/10 backdrop-blur-sm border-b border-white/20 py-6 px-4 md:px-8'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-3xl font-bold font-serif text-[#f1e7d8]'>Admin Dashboard</h1>
              <p className='text-amber-200 text-sm'>Welcome back, {user.email}</p>
            </div>
          </div>
        </div>

        
        <div className='px-4 md:px-8 py-8'>
        {activeTab === 'overview' && (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              {stats.map((stat, index) => (
                <div key={index} className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all hover:scale-105'>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {stat.icon}
                  </div>
                  <p className='text-amber-200 text-sm mb-1'>{stat.label}</p>
                  <p className='text-[#f1e7d8] text-3xl font-bold'>{stat.value}</p>
                </div>
              ))}
            </div>

           
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20'>
              <h2 className='text-2xl font-bold text-[#f1e7d8] mb-6'>Recent Orders</h2>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='border-b border-amber-700/30'>
                      <th className='text-left py-3 px-4 text-amber-200 font-semibold'>Order ID</th>
                      <th className='text-left py-3 px-4 text-amber-200 font-semibold'>Customer</th>
                      <th className='text-left py-3 px-4 text-amber-200 font-semibold'>Item</th>
                      <th className='text-left py-3 px-4 text-amber-200 font-semibold'>Amount</th>
                      <th className='text-left py-3 px-4 text-amber-200 font-semibold'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr key={index} className='border-b border-amber-700/20 hover:bg-white/5 transition-colors'>
                        <td className='py-3 px-4 text-[#f1e7d8]'>{order.id}</td>
                        <td className='py-3 px-4 text-[#f1e7d8]'>{order.customer}</td>
                        <td className='py-3 px-4 text-amber-200'>{order.item}</td>
                        <td className='py-3 px-4 text-[#f1e7d8] font-semibold'>{order.amount}</td>
                        <td className='py-3 px-4'>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Delivered' ? 'bg-green-500/20 text-green-300' :
                            order.status === 'Processing' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'orders' && (
          <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center'>
            <div className='text-6xl mb-4'>📦</div>
            <h3 className='text-2xl font-bold text-[#f1e7d8] mb-2'>Orders Management</h3>
            <p className='text-amber-200'>Manage all customer orders here</p>
          </div>
        )}

        {activeTab === 'products' && (
          <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center'>
            <div className='text-6xl mb-4'>🍰</div>
            <h3 className='text-2xl font-bold text-[#f1e7d8] mb-2'>Products Management</h3>
            <p className='text-amber-200'>Add, edit, or remove products</p>
          </div>
        )}

        {activeTab === 'customers' && (
          <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center'>
            <div className='text-6xl mb-4'>👥</div>
            <h3 className='text-2xl font-bold text-[#f1e7d8] mb-2'>Customer Management</h3>
            <p className='text-amber-200'>View and manage customer accounts</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

// Main Auth Component
export default function Auth() {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      setMessage('Please fill in all fields');
      return;
    }
    
    // Check for admin credentials
    if (loginEmail === 'admin@heritage.com' && loginPassword === 'admin123') {
      setIsLoggedIn(true);
      setUser({ email: loginEmail, role: 'admin' });
      setMessage('');
      return;
    }
    
    // Check regular users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.email === loginEmail && u.password === loginPassword);
    
    if (foundUser) {
      setIsLoggedIn(true);
      setUser({ email: loginEmail, role: 'user' });
      setMessage('');
      // For regular users, you would typically redirect to your landing page
      // window.location.href = '/landing'; // Uncomment this to redirect
      alert('Login successful! Redirecting to landing page...');
      // In your actual app, use your router to navigate to landing page
    } else {
      setMessage('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (!signupEmail || !signupPassword || !signupPhone) {
      setMessage('Please fill in all fields');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some(u => u.email === signupEmail)) {
      setMessage('Email already exists');
      return;
    }
    
    users.push({
      email: signupEmail,
      password: signupPassword,
      phone: signupPhone
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Account created! Please login.');
    setShow(false);
    
    setSignupEmail('');
    setSignupPassword('');
    setSignupPhone('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setLoginEmail('');
    setLoginPassword('');
    setMessage('');
  };

  // Show Admin Dashboard if admin is logged in
  if (isLoggedIn && user && user.role === 'admin') {
    return <AdminDashboard user={user} onLogout={handleLogout} />;
  }

  // Login/Signup Page
  return (
    <div className='w-full h-screen bg-[#855c33] pb-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-40'>
        <div className='h-full'>
          <h1 className='text-3xl text-[#f1e7d8] md:text-5xl font-semibold wrap-break-word py-20 font-serif px-12 leading-tight'>
            Welcome to Heritage Bakery! We're so glad you're here
          </h1>
        </div>
        
        <div className='h-auto'>
          <div className='w-130 h-90 bg-white/5 backdrop:blur-xl m-auto rounded-xl'>
            {message && (
              <div className={`mx-12 mt-8 p-3 rounded-lg text-center font-semibold ${
                message.includes('successful') || message.includes('created')
                  ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                  : 'bg-red-500/20 text-red-300 border border-red-500/50'
              }`}>
                {message}
              </div>
            )}

            {!show && (
              <div className=''>
                <h4 className='text-xl px-8 py-8 font-semibold font text-[#f1e7d8]'>Login to your account</h4>
                <p className='px-12 font-semibold text-[#f1e7d8]'>Email:</p>
                <input 
                  type="email" 
                  placeholder='Email' 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 mt-2 text-[#f1e7d8] bg-transparent'
                />
                
                <p className='px-12 font-semibold text-[#f1e7d8] py-4'>Password:</p>
                <input 
                  type="password" 
                  placeholder='Password' 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 -mt-4 text-[#f1e7d8] bg-transparent'
                />
                
                <div className='flex flex-wrap mx-25'>
                  <hr className='w-20 mx-3 mt-6'/>
                  <button 
                    className='py-2 text-[#f1e7d8] cursor-pointer' 
                    onClick={() => {
                      setShow(true);
                      setMessage('');
                    }}
                  >
                    Sign-up
                  </button>
                  <hr className='w-20 mx-3 mt-6'/>
                </div>
                
                <div className='flex justify-center items-start mt-4'>
                  <button 
                    onClick={handleLogin}
                    className='w-20 h-10 rounded font-semibold text-[#855c33] bg-amber-100 hover:bg-amber-200 transition-colors'
                  >
                    Login
                  </button>
                </div>
              </div>
            )}

            {show && (
              <div className='-mt-12'>
                <p className='px-12 font-semibold py-2 text-[#f1e7d8]'>Email:</p>
                <input 
                  type="email" 
                  placeholder='Email' 
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 mt-2 text-[#f1e7d8] bg-transparent'
                />
                
                <p className='px-12 font-semibold text-[#f1e7d8] py-4'>Password:</p>
                <input 
                  type="password" 
                  placeholder='Password' 
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 -mt-4 text-[#f1e7d8] bg-transparent'
                />
                
                <p className='px-12 font-semibold text-[#f1e7d8] py-4'>Phone no</p>
                <input 
                  type="tel" 
                  placeholder='Phone no' 
                  value={signupPhone}
                  onChange={(e) => setSignupPhone(e.target.value)}
                  className='w-90 h-10 border-2 border-[#f1e7d8] rounded px-6 mx-12 -mt-4 text-[#f1e7d8] bg-transparent'
                />
                
                <div className='flex flex-wrap mx-25'>
                  <hr className='w-20 mx-3 mt-6'/>
                  <button
                    className='py-2 text-[#f1e7d8] cursor-pointer'
                    onClick={() => {
                      setShow(false);
                      setMessage('');
                    }}
                  >
                    Back to Login
                  </button>
                  <hr className='w-20 mx-3 mt-6'/>
                </div>
                
                <div className='flex justify-center items-start mt-4'>
                  <button 
                    onClick={handleSignup}
                    className='w-20 h-10 rounded font-semibold text-[#855c33] bg-amber-100 hover:bg-amber-200 transition-colors'
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}