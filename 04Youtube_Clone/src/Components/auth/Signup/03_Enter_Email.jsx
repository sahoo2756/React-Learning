import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"

function Enter_Email() {
  const [emailFocused, setEmailFocused] = useState(false);
  const emailRef = useRef();

  return (

    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Use your existing email</h1>
        <h3>Enter the email address you want to use for your MyTube Account</h3>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-5 w-[50%] ">
        <div onClick={() => setEmailFocused(true)}
          className="relative w-[90%] box-border">
          <label
            className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${emailFocused ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
          >
            Email address
          </label>

          <input
            type="text"
            ref={emailRef}
            onBlur={() => {
              (emailRef.current.value === "") && setEmailFocused(false)
            }}
            className={`box-border ${emailFocused && `${emailRef.current.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}
          />
        </div>

        <Link to="verify_email_address"><button className="mt-10 bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
      </div>
    </div>
  )
}

export default Enter_Email