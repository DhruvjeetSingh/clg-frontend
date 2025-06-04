import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-green-700'>
        <p>ABOUT <span className='text-green-900 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-md shadow-md' src={assets.about_image} alt="About CuraLink" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-green-700'>
          <p>Welcome to CuraLink, your trusted partner in managing your healthcare needs conveniently and efficiently. At CuraLink, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>CuraLink is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, CuraLink is here to support you every step of the way.</p>
          <b className='text-green-900'>Our Vision</b>
          <p>Our vision at CuraLink is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4 text-green-700'>
        <p>WHY  <span className='text-green-900 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-6'>
        {[
          { title: 'EFFICIENCY:', desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
          { title: 'CONVENIENCE:', desc: 'Access to a network of trusted healthcare professionals in your area.' },
          { title: 'PERSONALIZATION:', desc: 'Tailored recommendations and reminders to help you stay on top of your health.' },
        ].map(({ title, desc }, idx) => (
          <div
            key={idx}
            className='border border-green-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
              text-green-700 cursor-pointer
              hover:bg-green-600 hover:text-white transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg'
          >
            <b className='text-green-900'>{title}</b>
            <p>{desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About
