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
  })

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const onSubmit = (data) => {
    console.log(data)
    setSuccess(true)
  }

  if (success) {
    return <Success />
  }

  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col px-5">
      <h1 className="text-4xl font-bold text-transparent bg-linear-to-r from-red-500 to-purple-600 bg-clip-text mb-8">
        Welcome Back!
      </h1>

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && (
          <StepFirst
            register={methods.register}
            errors={methods.formState.errors}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <StepSecond
            register={methods.register}
            errors={methods.formState.errors}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <StepThird formData={methods.getValues()} prevStep={prevStep} />
        )}
      </form>
    </div>
  )
}

export default App
