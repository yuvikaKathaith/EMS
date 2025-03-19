import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted :>");
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20 w-[500px] h-[450px]'>
        <h1 className='text-center mb-10 text-4xl'>LOGIN</h1>
        <form 
          className='flex flex-col items-center justify-center'
          onSubmit={(e) => submitHandler(e)}  
        >
          <input 
            required 
            value={email}
            onChange={(e) => handleEmail(e)}
            className='w-[400px] outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
          />
          <input
            required 
            value={password}
            onChange={(e) => handlePassword(e)}
            className='w-[400px] outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' 
          />
          <button className='w-[400px] mt-7 bg-emerald-600 text-white border-none outline-none hover:bg-emerald-700 font-semibold text-lg   py-2 px-8 rounded-full placeholder:text-white'>
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login