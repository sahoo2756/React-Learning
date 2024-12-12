import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';


function Enter_Otp_Send_To_Your_Email_Signin() {
  const [showOtp, setShowOtp] = useState(false)
  const [otpFocused, setOtpFocused] = useState(false);
  const otpRef = useRef();



 


  return (

    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Enter otp send to </h1>
        <div className="font-montserrat flex items-center gap-x-3 border-[1px] border-gray-600 w-fit rounded-full px-1 py-0.5">
          <span className="font-[500] bg-[#DC143C] px-1 rounded-full text-white cursor-pointer">M</span>
          {/* email address */}
          <p className='font-semibold'>sahoo15820004@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-5 w-[50%] ">
        <div onClick={() => setOtpFocused(true)}
          className="relative w-[90%] box-border">
          <label
            className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${otpFocused ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
          >
            Otp
          </label>

          <input
            type={showOtp ? "text" : "password"}
            ref={otpRef}
            onBlur={() => {
              (otpRef.current.value === "") && setOtpFocused(false)
            }}
            className={`box-border ${otpFocused && `${otpRef.current.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}
          />
        </div>
        <div className='flex items-center w-[90%] '>
          <input onChange={() => setShowOtp(prev => !prev)} type="checkbox" id="show-password" className='w-4 h-4' />
          <span className='text-sm font-semibold'>Show password</span>
        </div>
        <div className='w-full text-right mt-10 space-x-5'>
          <Link to={-1}><button className="text-black  font-bold text-sm px-6 pt-2 pb-2.5 rounded-full hover:bg-gray-200 hover:font-bold">Back</button></Link>

          <Link to="update_password"><button className="bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Enter_Otp_Send_To_Your_Email_Signin