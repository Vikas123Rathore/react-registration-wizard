import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { IoEye, IoEyeOff } from 'react-icons/io5'

const StepSecond = ({
  register,
  errors,
  nextStep,
  prevStep,
  trigger,
}) => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleNext = async () => {
    const isValid = await trigger([
      'email',
      'password',
      'confirmPassword',
    ])

    if (isValid) {
      nextStep()
    }
  }

  return (
    <div className="w-full max-w-md rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">

      {/* Heading */}

      <div className="flex flex-col items-center">

        <div className="w-16 h-16 rounded-full bg-white/20 flex justify-center items-center">
          <FaLock className="text-4xl text-cyan-300" />
        </div>

        <h2 className="text-3xl font-bold text-white mt-4">
          Account Details
        </h2>

        <p className="text-gray-300 text-center mt-2 text-sm">
          Create your account credentials
        </p>

      </div>

      {/* Email */}

      <div className="mt-8">

        <label className="text-white block mb-2">
          Email
        </label>

        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className={`w-full rounded-xl border p-3 bg-white/10 text-white outline-none transition
          ${
            errors.email
              ? 'border-red-500'
              : 'border-white/20 focus:border-cyan-400'
          }`}
        />

        {errors.email && (
          <p className="text-red-400 text-sm mt-1">
            {errors.email.message}
          </p>
        )}

      </div>

      {/* Password */}

      <div className="mt-5">

        <label className="text-white block mb-2">
          Password
        </label>

        <div className="relative">

          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder="Create password"
            className={`w-full rounded-xl border p-3 pr-12 bg-white/10 text-white outline-none transition
            ${
              errors.password
                ? 'border-red-500'
                : 'border-white/20 focus:border-cyan-400'
            }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>

        </div>

        {errors.password && (
          <p className="text-red-400 text-sm mt-1">
            {errors.password.message}
          </p>
        )}

      </div>

      {/* Confirm Password */}

      <div className="mt-5">

        <label className="text-white block mb-2">
          Confirm Password
        </label>

        <div className="relative">

          <input
            {...register('confirmPassword')}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            className={`w-full rounded-xl border p-3 pr-12 bg-white/10 text-white outline-none transition
            ${
              errors.confirmPassword
                ? 'border-red-500'
                : 'border-white/20 focus:border-cyan-400'
            }`}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
          </button>

        </div>

        {errors.confirmPassword && (
          <p className="text-red-400 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <button
          type="button"
          onClick={prevStep}
          className="w-full rounded-xl bg-linear-to-r from-green-500 to-green-600 py-3 text-white font-semibold"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold"
        >
          Next →
        </button>

      </div>

    </div>
  )
}

export default StepSecond
