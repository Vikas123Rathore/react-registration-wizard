import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import StepFirst from './components/StepFirst'
import StepSecond from './components/StepSecond'
import StepThird from './components/StepThird'
import Success from './components/Success'

import { formSchema } from './schema/formSchema'

const App = () => {
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',

    shouldUnregister: false,
  })

  const nextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  const onSubmit = (data) => {
    console.log(data)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center px-5 py-8">
        <Success />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-5">

      {/* Heading */}

      <h1 className="text-4xl font-bold text-transparent bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text mb-8">
        Registration Wizard
      </h1>

      {/* Progress */}

      <div className="w-full max-w-md mb-8">

        <div className="flex justify-between text-white text-sm mb-2">

          <span>
            Step {step} of 3
          </span>

          <span>
            {Math.round((step / 3) * 100)}%
          </span>

        </div>

        <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

          <div
            className="h-full bg-linear-to-r from-cyan-400 to-blue-600 transition-all duration-500"
            style={{
              width: `${(step / 3) * 100}%`,
            }}
          />

        </div>

      </div>

      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex justify-center"
      >
        {step === 1 && (
          <StepFirst
            register={methods.register}
            errors={methods.formState.errors}
            trigger={methods.trigger}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <StepSecond
            register={methods.register}
            errors={methods.formState.errors}
            trigger={methods.trigger}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <StepThird
            formData={methods.getValues()}
            prevStep={prevStep}
          />
        )}
      </form>
    </div>
  )
}

export default App
