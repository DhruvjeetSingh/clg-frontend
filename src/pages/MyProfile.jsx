import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    if (userData) setFormData({ ...userData })
  }, [userData])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddressChange = (line, value) => {
    setFormData(prev => ({
      ...prev,
      address: { ...prev.address, [line]: value }
    }))
  }

  const updateUserProfileData = async () => {
    if (!formData) return

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number")
      return
    }

    try {
      setLoading(true)
      const payload = new FormData()
      payload.append('name', formData.name)
      payload.append('phone', formData.phone)
      payload.append('gender', formData.gender)
      payload.append('dob', formData.dob)
      payload.append('address', JSON.stringify(formData.address))
      if (image) payload.append('image', image)

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, payload, {
        headers: { token }
      })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(null)
      } else {
        toast.error(data.message)
      }
    } catch (err) {
      console.error(err)
      toast.error(err.message || "Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  const cancelEdit = () => {
    setIsEdit(false)
    setImage(null)
    setFormData({ ...userData })
  }

  if (!formData) return null

  return (
    <div className='max-w-lg flex flex-col gap-4 text-sm pt-6'>

      {/* Profile Image Upload */}
      <label htmlFor='image' className='cursor-pointer relative w-fit'>
        <img
          src={image ? URL.createObjectURL(image) : formData.image}
          className={`w-36 h-36 rounded-full object-cover border ${isEdit ? 'opacity-80 hover:opacity-100 transition' : ''}`}
          alt="User"
        />
        {isEdit && (
          <img
            src={assets.upload_icon}
            className='absolute bottom-2 right-2 w-8 h-8'
            alt="Upload icon"
          />
        )}
        {isEdit && (
          <input type='file' id='image' hidden onChange={(e) => setImage(e.target.files[0])} />
        )}
      </label>

      {/* Name */}
      {isEdit ? (
        <input
          type='text'
          className='bg-gray-50 text-2xl font-medium max-w-xs border-b border-green-600 focus:outline-none'
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      ) : (
        <p className='text-2xl font-semibold text-green-700'>{formData.name}</p>
      )}

      <hr className='border border-gray-200' />

      {/* Contact Info */}
      <div>
        <p className='text-green-600 underline mb-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2'>
          <span className='font-medium'>Email:</span>
          <span className='text-green-700'>{formData.email}</span>

          <span className='font-medium'>Phone:</span>
          {isEdit ? (
            <input
              type='text'
              className='bg-gray-50 max-w-52 border-b border-green-600 focus:outline-none'
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          ) : (
            <span className='text-green-700'>{formData.phone}</span>
          )}

          <span className='font-medium'>Address:</span>
          {isEdit ? (
            <div className='flex flex-col gap-1'>
              <input
                type='text'
                className='bg-gray-50 border-b border-green-600'
                value={formData.address.line1}
                onChange={(e) => handleAddressChange('line1', e.target.value)}
              />
              <input
                type='text'
                className='bg-gray-50 border-b border-green-600'
                value={formData.address.line2}
                onChange={(e) => handleAddressChange('line2', e.target.value)}
              />
            </div>
          ) : (
            <span className='text-gray-700'>
              {formData.address.line1} <br /> {formData.address.line2}
            </span>
          )}
        </div>
      </div>

      {/* Basic Info */}
      <div>
        <p className='text-green-600 underline mb-2'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2'>
          <span className='font-medium'>Gender:</span>
          {isEdit ? (
            <select
              className='bg-gray-50 max-w-28 border-b border-green-600'
              value={formData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <span className='text-gray-700'>{formData.gender}</span>
          )}

          <span className='font-medium'>Birthday:</span>
          {isEdit ? (
            <input
              type='date'
              className='bg-gray-50 max-w-32 border-b border-green-600'
              value={formData.dob}
              onChange={(e) => handleInputChange('dob', e.target.value)}
            />
          ) : (
            <span className='text-gray-700'>{formData.dob}</span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className='flex gap-4 mt-6'>
        {isEdit ? (
          <>
            <button
              onClick={updateUserProfileData}
              disabled={loading}
              className='border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all'
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={cancelEdit}
              className='border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-200 transition-all'
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className='border border-green-600 text-green-700 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all'
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  )
}

export default MyProfile
