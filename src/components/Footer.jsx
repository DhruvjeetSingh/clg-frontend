import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-emerald-50 rounded-t-3xl shadow-inner mt-40 px-6 py-10'>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-gray-700 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="CuraLink Logo" />
          <p className='md:w-2/3 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className='text-xl font-semibold mb-5 text-emerald-700'>COMPANY</p>
          <ul className='flex flex-col gap-3'>
            <li className='cursor-pointer hover:text-emerald-600 transition-colors'>Home</li>
            <li className='cursor-pointer hover:text-emerald-600 transition-colors'>About Us</li>
            <li className='cursor-pointer hover:text-emerald-600 transition-colors'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-semibold mb-5 text-emerald-700'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-3'>
            <li>📞 +91 8118369164</li>
            <li>✉️ curalink@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div>
        <hr className='my-6 border-gray-300' />
        <p className='text-sm text-center text-gray-500'>
          &copy; 2024 CuraLink.com — All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
