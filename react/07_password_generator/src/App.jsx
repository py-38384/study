import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charecterAllowed, setCharecterAllowed] = useState(true)
  const [password, setPassword] = useState('')
  const [copyButtonText,setCopyButtonText] = useState('Copy')
  const [copyButtonBG,setcopyButtonBG] = useState('cyan')
  const [copyButtonTextColor,setcopyButtonTextColor] = useState('black')

  const passwordRef = useRef(null)

  const PasswordGeneratorFunc = () => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += "0123456789"
    if(charecterAllowed) str += `!@#$%^&*()_-=+|{}[];:'",<>./?~`
    for(let i=1;i<=length;i++){
      const random = Math.floor(Math.random()*(str.length))
      pass += str.charAt(random)
    }
    setCopyButtonText('Copy')
    setcopyButtonBG('cyan')
    setcopyButtonTextColor('black')
    setPassword(pass)
  }
  const PasswordGenerator = useCallback(PasswordGeneratorFunc, [length, numberAllowed, charecterAllowed, setPassword])
  useEffect(()=>{
    PasswordGenerator()
  },[length, numberAllowed, charecterAllowed])
  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    setCopyButtonText('Copied')
    setcopyButtonBG('gray')
    setcopyButtonTextColor('#bfbfbf')
    passwordRef.current?.select()
  }, [password])
  return (
    <>
      <div className='w-full text-center max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-700'>
      <h1 className='my-2 text-xl'>Password generator</h1>
        <div className='flex shadow overflow-hidden mb-4'>
          <input 
          value={password}
          className='outline-none w-full py-1 px-3 rounded-lg text-black'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          type="text" 
          />
          <button 
          onClick={copyPasswordToClipboard}
          style={{
            backgroundColor: copyButtonBG,
            color: copyButtonTextColor
          }}
          className='p-1 rounded px-3 mx-2'
          >
            {copyButtonText}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            className='cursor-pointer'
            min={6}
            max={100}
            value={length}
            id='pass-range'
            type="range"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor='pass-range'>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>setNumberAllowed((prev)=> !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='charactorInput'
            onChange={()=>setCharecterAllowed((prev)=> !prev)}
            />
            <label htmlFor="charactorInput">Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
