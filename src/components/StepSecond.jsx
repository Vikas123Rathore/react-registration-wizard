import React from 'react'
import { FaLock } from 'react-icons/fa'

const StepSecond = ({ register, errors, nextStep, prevStep }) => {
  return (
    <div className="w-90 max-w-md rounded-4xl border border-white bg-white/10 backdrop-blur-xl shadow-2xl p-8">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-white/20 border border-white/20 flex items-center justify-center">
          <FaLock className="text-4xl text-cyan-300" />
        </div>

        <h2 className="text-3xl font-bold text-white mt-4">Account Details</h2>

        <p className="text-gray-300 text-center mt-2 text-sm">
          Create your account credentials
        </p>
      </div>

      {/* First Name */}
      <div className="mt-8">
        <label className="block text-white font-medium mb-2">Email</label>

        <input
          {...register('email')}
          type="text"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Last Name */}
      <div className="mt-5">
        <label className="block text-white font-medium mb-2">Password</label>

        <input
          type="password"
          {...register('password')}
          placeholder="Create a password"
          className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-gray-300 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* confirm password */}
      <div className="mt-5">
        <label className="block text-white font-medium mb-2">
          Confirm Password
        </label>

        <input
          type="password"
          {...register('confirmPassword')}
          className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      {/* Next Button */}
      <div className="flex items-center justify-between px-4 gap-4">
        <button
          onClick={prevStep}
          className="mt-8 w-full rounded-xl bg-linear-to-r from-green-500 to-green-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="mt-8 w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default StepSecond
