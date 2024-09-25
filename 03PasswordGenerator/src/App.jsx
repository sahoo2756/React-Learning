import { useEffect, useRef, useState } from 'react'


function getRandomPassword( length = 8, numbersAllow = false , SpecialCharacterAllow = false ) {
  const numbers = '0123456789';
  const specialCharacters = '@#$%^&';
  
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (numbersAllow) characters += numbers;
  if (SpecialCharacterAllow) characters += specialCharacters;
 

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

function App() {

  const [length, setLength] = useState(8);
  const [isCharacterAllow, setIsCharacterAllow] = useState(false);
  const [isNumberAllow, setIsNumberAllow] = useState(false);

  const [password , setPassword] = useState(getRandomPassword());

  const passwordFeildRef = useRef()

  

  useEffect(() => {
    let newPassword = getRandomPassword(length , isNumberAllow ,isCharacterAllow);
    setPassword(newPassword);
  }, [length , isCharacterAllow , isNumberAllow]);

  return (
    <>
      <div className='text-white bg-gray-600 w-1/3 h-fit px-4 py-3 rounded-md shadow-lg m-auto mt-10'>

      <h1 className='font-bold text-lg text-cyan-200 text-center mb-5'>Password Generator</h1>

        <div className='w-full flex items-center mb-5'>
          {/* for search box and copy btn */}
          <input
            className='w-full px-3 py-1 font-bold text-lg bg-gray-200 text-black outline-none border-collapse  rounded-s-md'
            ref={passwordFeildRef}
            value={password}
            type="text" readOnly 
          />
          <button 
          onClick={(e) => {
            passwordFeildRef.current.select();
            navigator.clipboard.writeText(password);
          }}
          className='bg-blue-700 px-3 py-1 font-semibold text-lg'>copy</button>
        </div>

        <div className='flex justify-evenly'>
          {/* for password generate attributes like length , character & number checkbox */}
          <input type="range" value={length} min={1} max={30} 
          onChange={(e) => {
            let value = e.target.value;
            if(value >= 8) setLength(e.target.value)
            
          }} />
          <span>Length ({length})</span>

          <input
            onChange={(e) => setIsCharacterAllow(e?.target?.checked)}
            type="checkbox" name="character"
          />
          <label htmlFor="character">character</label>

          <input
            onChange={(e) => setIsNumberAllow(e?.target?.checked)}
            type="checkbox"
          />
          <label htmlFor="numbers">numbers</label>

        </div>

      </div>
    </>
  )
}

export default App
