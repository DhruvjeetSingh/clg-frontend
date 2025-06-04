import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#4A7C4A]'>
        <p>CONTACT <span className='text-green-800 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-green-700'>OUR COLLEGE</p>
          <p className='text-green-600'>KAILASH INSTITUTE OF MANAGEMENT<br /> GIDA, GORAKHPUR, INDIA</p>
          <p className='text-green-600'>Tel: (+91) 8118169160 <br /> Email: curalink@gmail.com</p>
          <p className='font-semibold text-lg text-green-700'>CAREERS AT CuraLink</p>
          <p className='text-green-600'>Learn more about our teams and job openings.</p>
          <button className='border border-green-700 px-8 py-4 text-sm hover:bg-green-700 hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
