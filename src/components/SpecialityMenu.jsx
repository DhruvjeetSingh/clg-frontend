import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-900 px-4'>
      <h1 className='text-3xl font-semibold text-emerald-700'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-600'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <div
        className='flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto no-scrollbar'
        role="list"
        aria-label="Speciality categories"
      >
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-transform duration-300 group'
            key={index}
            role="listitem"
          >
            <img
              className='w-16 sm:w-24 mb-2 rounded-full group-hover:shadow-lg transition-shadow duration-300'
              src={item.image}
              alt={`${item.speciality} icon`}
              loading="lazy"
              draggable={false}
            />
            <p className='text-gray-700 group-hover:text-emerald-600 font-medium'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
