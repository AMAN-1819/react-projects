import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const[length,setLength]= useState(8)
  const[NumberAllowed,setNumberAllowed]=useState(false)
  const[specialCharacterAllowed,setSpecialCharacterAllowed]=useState(false)
  const[password,setPassword]=useState("")
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(NumberAllowed){
    str+="0123456789"
  }
  if(specialCharacterAllowed)
  {str+="@#$%^&*+-_=!?;:,./\|~`<>{}[]()"}

for(let i=1;i<=length;i++)
{let char =Math.floor(Math.random()*str.length+1)
pass+=str.charAt(char)}
setPassword(pass)


  },[length,NumberAllowed,specialCharacterAllowed,setPassword])

const copyPasswordToClipboard= useCallback(() =>{
  passwordRef.current?.select()
  passwordRef.current.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password)
},[password])

   useEffect(() => {passwordGenerator()},[length,NumberAllowed,specialCharacterAllowed,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-600 bg-gray-900">
       <h1 className="text-white text-3xl text-center my-3">PasswordGenerator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      ref={passwordRef} />
      <button
      onClick={copyPasswordToClipboard}
      className="bg-blue-700 px-4 py-3 text-black text-xl">Copy</button>
    </div>
    <div className="flex gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" 
        min={8}
        max={80}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>{setLength(e.target.value)}}
        />
          <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={NumberAllowed}
        id='numberInput'
        onChange={() => {setNumberAllowed((prev)=> !prev);
        }}
         />
         <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1 '>
        <input type="checkbox"
        defaultChecked={specialCharacterAllowed}
        id='characterInput'
        onChange={() => {setSpecialCharacterAllowed((prev)=> !prev);
        }}
         />
         <label htmlFor="characterInput">characters</label>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default App
