import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Common_Label_Input = ({ label, state, handleState, eleRef }) => {
  return (
    <div onClick={() => handleState(true)}
      className="relative w-[90%] box-border">
      <label
        className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${state ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
      >
        {label}
      </label>

      <input
        type="text"
        ref={eleRef}
        onBlur={() => {
          (eleRef.current.value === "") && handleState(false)
        }}
        className={`box-border ${state && `${eleRef.current.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}
      />
    </div>
  )
}

function Enter_Name_Page() {

  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  return (
    // <GoogleOAuthProvider clientId={clientID}>
    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Create a MyTube Account</h1>
        <h3>Enter your name</h3>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-5 w-[50%] ">
        <Common_Label_Input label={'First Name'} state={firstNameFocused} handleState={setFirstNameFocused} eleRef={firstNameRef} />

        <Common_Label_Input label={'Last Name'} state={lastNameFocused} handleState={setLastNameFocused} eleRef={lastNameRef} />

        <div className='mt-10 space-x-5 flex items-center'>
          <button>Sign in with google</button>
          <Link to="enter_dob_gender"><button className="bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
        </div>
      </div>
    </div>
    // </GoogleOAuthProvider>
  )
}

export default Enter_Name_Page

// "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"