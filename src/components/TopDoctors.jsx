import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 px-4'>
      <h1 className='text-3xl font-semibold text-emerald-700'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-600'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div
        className='w-full grid grid-cols-auto gap-6 pt-5 gap-y-6 px-3 sm:px-0'
        role='list'
        aria-label='Top doctors list'
      >
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className='border border-gray-300 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:translate-y-[-8px] transition-all duration-300'
            key={index}
            role='listitem'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                navigate(`/appointment/${item._id}`)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <img
              className='bg-gray-100 w-full object-cover h-48'
              src={item.image}
              alt={`${item.name} profile`}
              loading='lazy'
              draggable={false}
            />
            <div className='p-5'>
              <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-emerald-600' : 'text-gray-400'}`}>
                <span
                  className={`w-3 h-3 rounded-full ${item.available ? 'bg-emerald-600' : 'bg-gray-400'}`}
                  aria-label={item.available ? 'Available' : 'Not Available'}
                  role='img'
                />
                <p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className='text-gray-900 text-lg font-semibold mt-2'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className='bg-emerald-600 text-white px-12 py-3 rounded-full mt-10 hover:bg-emerald-700 transition-colors duration-300'
      >
        More
      </button>
    </div>
  )
}

export default TopDoctors
