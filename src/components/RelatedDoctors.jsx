import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality, docId }) => {

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const [relDoc, setRelDoc] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      )
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 px-4'>

      {/* Heading */}
      <h1 className='text-3xl font-semibold'>Related Doctors</h1>
      <p className='sm:w-1/2 text-center text-sm text-gray-600'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor Cards */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 max-w-6xl'>

        {relDoc.map((item, index) => (
          <div
            key={index}
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className='bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300'
          >
            <img className='w-full h-48 object-cover bg-gray-100' src={item.image} alt={item.name} />

            <div className='p-4 space-y-1'>
              <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-emerald-600' : 'text-gray-500'}`}>
                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                <p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className='text-lg font-medium text-gray-900'>{item.name}</p>
              <p className='text-sm text-gray-600'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default RelatedDoctors
