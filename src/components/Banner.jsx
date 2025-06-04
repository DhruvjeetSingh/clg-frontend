import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:flex-row bg-emerald-600 rounded-2xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 mx-4 md:mx-10 shadow-lg'>

      {/* ------- Left Side ------- */}
      <div className='flex-1 py-10 md:py-16 lg:py-24 lg:pl-5 text-white'>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'>
          <p>Book Appointment</p>
          <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>

        <button 
          onClick={() => { navigate('/login'); scrollTo(0, 0) }}
          className='bg-white text-emerald-700 text-sm sm:text-base px-8 py-3 rounded-full mt-6 shadow hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium'
        >
          Create account
        </button>
      </div>

      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img
          className='w-full absolute bottom-0 right-0 max-w-md drop-shadow-xl'
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  )
}

export default Banner
