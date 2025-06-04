import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      let response
      if (state === 'Sign Up') {
        response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
      } else {
        response = await axios.post(backendUrl + '/api/user/login', { email, password })
      }

      const data = response.data

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        toast.success(state === 'Sign Up' ? 'Account created successfully!' : 'Logged in successfully!')
      } else {
        toast.error(data.message || 'Something went wrong')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Network error')
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center bg-white rounded-lg shadow-lg max-w-md mx-auto p-8'>
      <div className='flex flex-col gap-4 w-full text-gray-800'>
        <h2 className='text-3xl font-bold text-emerald-700'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className='mb-4'>
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
        </p>

        {state === 'Sign Up' && (
          <label className='flex flex-col'>
            <span className='mb-1 font-medium'>Full Name</span>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='Name'
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400'
              aria-label='Full Name'
            />
          </label>
        )}

        <label className='flex flex-col'>
          <span className='mb-1 font-medium'>Email</span>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email.com'
            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400'
            aria-label='Email'
          />
        </label>

        <label className='flex flex-col'>
          <span className='mb-1 font-medium'>Password</span>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='••••••••'
            className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400'
            aria-label='Password'
          />
        </label>

        <button
          type='submit'
          className='bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition-colors mt-2'
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className='text-center text-sm mt-4'>
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className='text-emerald-600 cursor-pointer underline hover:text-emerald-700'
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setState('Login')}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className='text-emerald-600 cursor-pointer underline hover:text-emerald-700'
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setState('Sign Up')}
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  )
}

export default Login
