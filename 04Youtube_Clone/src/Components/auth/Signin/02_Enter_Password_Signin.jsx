import { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Enter_Password_Signin() {
  const [showPassword , setShowPassword] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false);
  const emailRef = useRef();

  let navigate = useNavigate();
  let location = useLocation()

  const changeUrlToForgot_Password =  () => {
    const currentPath = location.pathname;

    // Split the path and remove the last segment
    const pathArray = currentPath.split('/');
    pathArray.pop(); // Go back one level
    const newPath = `${pathArray.join('/')}/forgot_password`; // Append "forgot"

    // Navigate to the new path
    navigate(newPath);
  }
  

  return (

    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Hi , Manas(UserName)</h1>
        <div className="font-montserrat flex items-center gap-x-3 border-[1px] border-gray-600 w-fit rounded-full px-1 py-0.5">
          <span className="font-[500] bg-[#DC143C] px-1 rounded-full text-white cursor-pointer">M</span>
          {/* email address */}
          <p className='font-semibold'>sahoo15820004@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-5 w-[50%] ">
        <div onClick={() => setEmailFocused(true)}
          className="relative w-[90%] box-border">
          <label
            className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${emailFocused ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
          >
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            ref={emailRef}
            onBlur={() => {
              (emailRef.current.value === "") && setEmailFocused(false)
            }}
            className={`box-border ${emailFocused && `${emailRef.current.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}
          />
        </div>
        <div className='flex items-center w-[90%] '>
          <input onChange={() => setShowPassword(prev => !prev)} type="checkbox" id="show-password" className='w-4 h-4' />
          <span className='text-sm font-semibold'>Show password</span>
        </div>
        <div className='w-full text-right mt-10 space-x-5'>
         <button onClick={changeUrlToForgot_Password} className="text-[#DC143C]  font-bold text-sm px-6 pt-2 pb-2.5 rounded-full hover:bg-gray-200 hover:font-bold">forgot password</button>

          <Link to="/"><button className="bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Enter_Password_Signin