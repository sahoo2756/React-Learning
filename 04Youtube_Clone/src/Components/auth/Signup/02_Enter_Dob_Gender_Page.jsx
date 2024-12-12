import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Common_Label_Select = ({ label, state, stateHandler, eleRef, optionArr, parentDivExtraClass = "", labelExtraClass = "", selectExtraClass = "" }) => {

  function openDropdown() {
    stateHandler(true)
    eleRef.current.showPicker() // Focus the dropdown
  }

  return (
    <div onClick={() => setTimeout(() => {stateHandler(true)}, 0)}
      className={`relative w-[30%] box-border ${parentDivExtraClass}`}>
      <label
        onClick={openDropdown}
        className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-pointer px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${state ? "bg-white text-blue-500 text-xs" : "top-[50%]"}`}
      >
        {label}
      </label>

      <select ref={eleRef} onBlur={() => (eleRef.current.value === "") && setTimeout(() => {stateHandler(true)}, 0)} className={`${state && `border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 `}>
        <option value="" hidden></option>
        {optionArr.map((ele, idx) => (
          <option key={idx} value={ele}>{ele}</option>
        ))}
      </select>
    </div>
  )
}

const Common_Lebel_Input = ({ label, state, stateHandler, eleRef, inputMaxLength = 4,  labelExtraClass = "", inputExtraClass = "" }) => {
  return (
    <div onClick={() => stateHandler(true)}
      className="relative w-[30%] box-border">
      <label
        className={`absolute transition-all duration-300 ease-in-out -translate-y-1/2 left-4 cursor-text px-2  text-black font-montserrat tracking-tight font-[500]  text-md ${state ? "bg-white text-blue-500 text-xs" : "top-[50%]"} ${labelExtraClass}`}
      >
        {label}
      </label>

      <input
        type="number"
        onInput={(e) => {
          
          if (e.target.value.length > inputMaxLength) {
            e.target.value = e.target.value.slice(0, inputMaxLength); // Restrict to 4 characters
          }
        }}
        pattern="\d{1,4}"
        ref={eleRef}
        onBlur={() => {
          (eleRef?.current?.value === "") && stateHandler(false)
        }}
        className={`box-border ${state && `${eleRef?.current?.focus()} border-[2px] border-blue-500 `} border-[2px] border-gray-300 px-3 py-4 w-full text-md rounded-[6px] outline-none focus:border-blue-600 ${inputExtraClass}`}
      />
    </div>
  )
}



function Enter_Birthday_Gender_Page() {
  const [monthFocused, setMonthFocused] = useState(false);
  const [yearFocused, setYearFocused] = useState(false);
  const [dayFocused, setDayFocused] = useState(false);
  const [genderFocused, setGenderFocused] = useState(false);
  const monthFieldRef = useRef();
  const genderFieldRef = useRef();
  const yearFieldRef = useRef();
  const dayFieldRef = useRef();


  return (

    <div className="flex justify-between w-full">

      <div style={{ pointerEvents: false }} className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Basic information</h1>
        <h3>Enter your birthday and gender</h3>
      </div>

      <div className="flex flex-col justify-end items-end gap-y-5 w-[45%] ">

        <div className='relative w-full box-border flex gap-x-3 justify-between '>
          <Common_Label_Select label={"Month"} state={monthFocused} stateHandler={setMonthFocused} eleRef={monthFieldRef} optionArr={['January', 'February', 'March', 'April', 'June', 'July', 'Aigust', 'September', 'October', 'November', 'December']} />
          <Common_Lebel_Input label={"Day"} state={dayFocused} stateHandler={setDayFocused} eleRef={dayFieldRef} inputMaxLength={2} />
          <Common_Lebel_Input label={"Year"} state={yearFocused} stateHandler={setYearFocused} eleRef={yearFieldRef} inputMaxLength={4} />
        </div>

        <Common_Label_Select label={"Gender"} state={genderFocused} stateHandler={setGenderFocused} eleRef={genderFieldRef} optionArr={['Male', 'Female', 'Custom', 'Rather Not Say']} parentDivExtraClass={"w-full"} />

        <Link to='enter_email'><button className="mt-10 bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
      </div>
    </div>
  )
}

export default Enter_Birthday_Gender_Page