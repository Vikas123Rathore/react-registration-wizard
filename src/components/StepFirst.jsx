import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const StepFirst = ({
  register,
  errors,
  nextStep,
  trigger,
}) => {

  const handleNext = async () => {

    const isValid = await trigger([
      'firstName',
      'lastName',
      'dob',
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

          <FaUserCircle className="text-4xl text-cyan-300" />

        </div>

        <h2 className="text-3xl font-bold text-white mt-4">
          Personal Information
        </h2>

        <p className="text-gray-300 text-center mt-2 text-sm">
          Tell us a little about yourself.
        </p>

      </div>

      {/* First Name */}

      <div className="mt-8">

        <label className="text-white block mb-2">
          First Name
        </label>

        <input
          {...register('firstName')}
          type="text"
          placeholder="Enter your first name"
          className={`w-full rounded-xl border p-3 bg-white/10 text-white outline-none transition

          ${
            errors.firstName
              ? 'border-red-500'
              : 'border-white/20 focus:border-cyan-400'
          }`}
        />

        {errors.firstName && (
          <p className="text-red-400 text-sm mt-1">
            {errors.firstName.message}
          </p>
        )}

      </div>

      {/* Last Name */}

      <div className="mt-5">

        <label className="text-white block mb-2">
          Last Name
        </label>

        <input
          {...register('lastName')}
          type="text"
          placeholder="Enter your last name"
          className={`w-full rounded-xl border p-3 bg-white/10 text-white outline-none transition

          ${
            errors.lastName
              ? 'border-red-500'
              : 'border-white/20 focus:border-cyan-400'
          }`}
        />

        {errors.lastName && (
          <p className="text-red-400 text-sm mt-1">
            {errors.lastName.message}
          </p>
        )}

      </div>

      {/* DOB */}

      <div className="mt-5">

        <label className="text-white block mb-2">
          Date of Birth
        </label>

        <input
          {...register('dob')}
          type="date"
          className={`w-full rounded-xl border p-3 bg-white/10 text-white outline-none transition

          ${
            errors.dob
              ? 'border-red-500'
              : 'border-white/20 focus:border-cyan-400'
          }`}
        />

        {errors.dob && (
          <p className="text-red-400 text-sm mt-1">
            {errors.dob.message}
          </p>
        )}

      </div>

      {/* Next Button */}

      <button
        type="button"
        onClick={handleNext}
        className="mt-8 w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-lg font-semibold text-white hover:scale-[1.02] transition"
      >
        Next →
      </button>

    </div>
  )
}

export default StepFirst
