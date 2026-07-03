import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const StepFirst = ({ register, errors, nextStep }) => {
  return (
    <div className="w-full max-w-md rounded-4xl border border-white bg-white/10 backdrop-blur-xl shadow-2xl p-8">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-white/20 border border-white/20 flex items-center justify-center">
          <FaUserCircle className="text-4xl text-cyan-300" />
        </div>

        <h2 className="text-3xl font-bold text-white mt-4">
          Personal Information
        </h2>

        <p className="text-gray-300 text-center mt-2 text-sm">
          Tell us a little about yourself to get started.
        </p>
      </div>

      {/* First Name */}
      <div className="mt-8">
        <label className="block text-white font-medium mb-2">First Name</label>

        <input
          {...register('firstName')}
          type="text"
          placeholder="Enter your first name"
          className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      {/* Last Name */}
      <div className="mt-5">
        <label className="block text-white font-medium mb-2">Last Name</label>

        <input
          type="text"
          {...register('lastName')}
          placeholder="Enter your last name"
          className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      {/* Date of Birth */}
      <div className="mt-5">
        <label className="block text-white font-medium mb-2">
          Date of Birth
        </label>

        <input
          type="date"
          {...register('dob')}
          className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
        />
        {errors.dob && <p>{errors.dob.message}</p>}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextStep}
        className="mt-8 w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  )
}

export default StepFirst
