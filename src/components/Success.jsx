import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Success = () => {
  const handleRestart = () => {
    window.location.reload()
  }

  return (
    <div className="w-full max-w-md rounded-4xl border border-green-400/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
      <div className="flex flex-col items-center">
        <FaCheckCircle className="text-7xl text-green-400 mb-6" />

        <h2 className="text-3xl font-bold text-white">
          Registration Successful!
        </h2>

        <p className="text-center text-gray-300 mt-3">
          Thank you for registering.
          <br />
          Your information has been submitted successfully.
        </p>

        <button
          onClick={handleRestart}
          className="mt-8 w-full rounded-xl bg-linear-to-r from-green-500 to-emerald-600 py-3 text-lg font-semibold text-white hover:scale-105 transition duration-300"
        >
          Register Again
        </button>
      </div>
    </div>
  )
}

export default Success
