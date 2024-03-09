import React from 'react'
import { SignupFormDemo } from './signup-form'

function SignupPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
TrackMyTransit      </h2>
        <SignupFormDemo/>
    </div>
  )
}

export default SignupPage