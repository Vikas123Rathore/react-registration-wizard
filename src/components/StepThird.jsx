import React from 'react'
import {
  FaClipboardCheck,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
} from 'react-icons/fa'

const StepThird = ({ formData, prevStep }) => {
  return (
    <div className="w-full max-w-md rounded-4xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">

      {/* Heading */}

      <div className="flex flex-col items-center">

        <div className="w-16 h-16 rounded-full bg-white/20 flex justify-center items-center">
          <FaClipboardCheck className="text-4xl text-cyan-300" />
        </div>

        <h2 className="text-3xl font-bold text-white mt-4">
          Review & Submit
        </h2>

        <p className="text-gray-300 text-center mt-2 text-sm">
          Please review your details before submitting.
        </p>

      </div>

      {/* Personal Information */}

      <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4">

        <h3 className="text-cyan-300 font-semibold text-lg mb-4">
          👤 Personal Information
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-gray-300">
              <FaUser />
              <span>First Name</span>
            </div>

            <span className="text-white">
              {formData.firstName || "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-gray-300">
              <FaUser />
              <span>Last Name</span>
            </div>

            <span className="text-white">
              {formData.lastName || "-"}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-gray-300">
              <FaCalendarAlt />
              <span>Date of Birth</span>
            </div>

            <span className="text-white">
              {formData.dob || "-"}
            </span>
          </div>

        </div>

      </div>

      {/* Account Details */}

      <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4">

        <h3 className="text-cyan-300 font-semibold text-lg mb-4">
          🔒 Account Details
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between">

            <div className="flex gap-2 items-center text-gray-300">
              <FaEnvelope />
              <span>Email</span>
            </div>

            <span className="text-white">
              {formData.email || "-"}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-300">
              Password
            </span>

            <span className="text-white">
              {"•".repeat(formData.password?.length || 8)}
            </span>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <button
          type="button"
          onClick={prevStep}
          className="w-full rounded-xl bg-linear-to-r from-green-500 to-green-600 py-3 text-white font-semibold hover:scale-[1.02] transition"
        >
          ← Back
        </button>

        <button
          type="submit"
          className="w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold hover:scale-[1.02] transition"
        >
          Submit →
        </button>

      </div>

    </div>
  )
}

export default StepThird
