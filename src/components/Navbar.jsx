import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 shadow-sm px-4 md:px-8 bg-emerald-100 rounded-2xl'>
      {/* bg-emerald-600 rounded-2xl px-6 md:px-10 lg:px-20 shadow-md */}
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="CuraLink Logo" />

      {/* Desktop Navigation */}
      <ul className='md:flex items-start gap-6 font-medium text-gray-800 hidden'>
        <NavLink to='/'><li className='hover:text-emerald-600 transition-colors'>HOME</li></NavLink>
        <NavLink to='/doctors'><li className='hover:text-emerald-600 transition-colors'>ALL DOCTORS</li></NavLink>
        <NavLink to='/about'><li className='hover:text-emerald-600 transition-colors'>ABOUT</li></NavLink>
        <NavLink to='/contact'><li className='hover:text-emerald-600 transition-colors'>CONTACT</li></NavLink>
      </ul>

      {/* User / Login Button */}
      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-9 h-9 rounded-full object-cover border border-emerald-500' src={userData.image} alt="User" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
            
            {/* Dropdown Menu */}
            <div className='absolute top-12 right-0 text-base font-medium text-gray-700 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
              <div className='min-w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col gap-3 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-emerald-600 cursor-pointer transition-colors'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-emerald-600 cursor-pointer transition-colors'>My Appointments</p>
                <p onClick={logout} className='hover:text-red-500 cursor-pointer transition-colors'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-2xl font-medium shadow-md hover:shadow-lg transition-all duration-300 hidden md:block'
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="Menu" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 z-30 w-full max-w-xs bg-white transition-transform duration-300 shadow-lg ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex items-center justify-between px-5 py-6 border-b border-gray-300'>
          <img src={assets.logo} className='w-36' alt="CuraLink Logo" />
          <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7 cursor-pointer' alt="Close" />
        </div>
        <ul className='flex flex-col items-start gap-4 px-6 mt-6 text-base font-medium text-gray-800'>
          <NavLink onClick={() => setShowMenu(false)} to='/'><p className='hover:text-emerald-600'>HOME</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='hover:text-emerald-600'>ALL DOCTORS</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='hover:text-emerald-600'>ABOUT</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='hover:text-emerald-600'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar


