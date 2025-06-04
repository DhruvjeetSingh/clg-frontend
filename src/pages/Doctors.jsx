import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-green-700 font-medium'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden
            ${showFilter ? 'bg-green-600 text-white border-green-700 shadow-lg' : 'bg-white text-green-600 border-green-600 hover:bg-green-50'}`}
        >
          Filters
        </button>

        <div className={`flex-col gap-4 text-sm ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => (
            <p
              key={spec}
              onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded cursor-pointer transition-all
                ${
                  speciality === spec
                    ? 'bg-green-100 text-green-900 border-green-300 shadow-md'
                    : 'border-gray-300 text-green-700 hover:bg-green-50 hover:border-green-400'
                }`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
              className='border border-green-300 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-300'
            >
              <img className='bg-green-50' src={item.image} alt={item.name} />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-600' : 'bg-gray-400'}`}></span>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className='text-green-900 text-lg font-semibold'>{item.name}</p>
                <p className='text-green-700 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
