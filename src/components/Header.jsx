import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-emerald-400 rounded-2xl px-6 md:px-10 lg:px-20 shadow-md'>

      
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[8vw] md:mb-[-30px] text-white'>

        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="group" />
          <p className='text-white'>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href='#speciality'
          className='flex items-center gap-2 bg-emerald-200 text-emerald-900 px-8 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm mt-4 md:mt-0'
        >
          Book appointment
          <img className='w-3' src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      <div className='md:w-1/2 relative mt-6 md:mt-0'>
        <img
          className='w-full h-full md:absolute bottom-auto h-auto rounded-xl '
          src={assets.header_img}
          alt="doctor appointment"
        />
      </div>
    </div>
  )
}

export default Header
