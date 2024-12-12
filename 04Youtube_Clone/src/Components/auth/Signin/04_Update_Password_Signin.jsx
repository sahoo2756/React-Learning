import  { useRef, useState } from 'react'
import { Link } from 'react-router-dom';


const Common_Label_Input = ({ label, state, handleState, eleRef , type}) => {
  return (
    <div onClick={() => handleState(true)}
      className="relative w-[90%] box-border">
      <label
        className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${state ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
      >
        {label}
      </label>

      <input
        type={type}
        maxLength={10}
        minLength={4}
        ref={eleRef}
        onBlur={() => {
          (eleRef.current.value === "") && handleState(false)
        }}
        className={`box-border ${state && `${eleRef.current.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}
      />
    </div>
  )
}

function Update_Password_Signin() {
  const [showPassword , setShowPassword] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmPasswordFocused] = useState(false);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (

    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Update Your Password</h1>
        <h3>Update your with a mix of letters, numbers and symbols</h3>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-5 w-[50%] ">
        <Common_Label_Input label={'Password'} state={passwordFocused} handleState={setPasswordFocused} eleRef={passwordRef} type={(showPassword ? "text" : "password")} />

        <Common_Label_Input label={'Confirm Password'} state={confirmFocused} handleState={setConfirmPasswordFocused} eleRef={confirmPasswordRef} type={(showPassword ? "text" : "password")} />

        <div className='flex items-center w-[90%] '>
          <input onChange={() => setShowPassword(prev => !prev)} type="checkbox" id="show-password" className='w-4 h-4' />
          <span  className='text-sm font-semibold'>Show password</span>
        </div>

        <Link to="/"><button className="mt-10 bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
      </div>
    </div>
  )
}

export default Update_Password_Signin