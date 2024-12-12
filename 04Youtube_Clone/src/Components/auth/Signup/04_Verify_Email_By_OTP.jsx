import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"

function Verify_Email_By_OTP() {
  const [otpFocused, setOtpFocused] = useState(false);
  const otpRef = useRef();

  let label = `Enter the code we sent to sahoo15820004@gmail.com. Check your spam folder if you don't see an email`

  return (

    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Verify your email address</h1>
        <h3>Enter otp</h3>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-3 w-[50%] ">

        <p className='w-[90%] text-wrap text-gray-700 text-sm'>{label}</p>
        <div onClick={() => setOtpFocused(true)}
          className="relative w-[90%] box-border mt-2">
          <label
            className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${otpFocused ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
          >
            Enter Code
          </label>

          <input
            type="text"
            ref={otpRef}
            onBlur={() => {
              (otpRef.current.value === "") && setOtpFocused(false)
            }}
            className={`box-border ${otpFocused && `${otpRef.current.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}
          />
        </div>
        <button className='text-sm text-green-700 hover:text-green-900'>Resend Code</button>

        <div className='mt-10 space-x-5'>
          <Link to={-1}><button className="text-black  font-bold text-sm px-6 pt-2 pb-2.5 rounded-full hover:bg-gray-200 hover:font-bold">Back</button></Link>

          <Link to="create_a_password"><button className="bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
        </div>

      </div>
    </div>
  )
}

export default Verify_Email_By_OTP