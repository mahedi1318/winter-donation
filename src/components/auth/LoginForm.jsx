import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useForm, Controller } from 'react-hook-form'
import UseAuth from '../../hook/UseAuth'

const LoginForm = () => {

  const {loginAccount} = UseAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, reset, setValue, control } = useForm()
  const onSubmit = (data) => {
    const {email, password} = data;
    loginAccount(email, password).then((result)=>{
      console.log(result)
      navigate("/")
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <div className="bg-[#f5f5f5] py-10 px-10 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>          
        <div className="mt-5">
            <label className='block outfit text-[16px] font-medium' htmlFor="">Email</label>
            <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' {...register("email")} type="email" name='email' placeholder='Email' required/>
        </div>
        <div className="mt-5">
            <label className='block outfit text-[16px] font-medium' htmlFor="">Password</label>
            <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' {...register("password")} type="password" name='password' placeholder='Password' required/>
        </div>
        <div className='mt-2'><a className="link link-hover outfit text-[17px] font-semibold">Forgot password?</a></div>
        <button className="btn btn-neutral bg-[#1a685b] border-0 mt-4 w-full">Login</button>
        </form>
        <div className="text-center mt-8">
        <p className='jost text-[16px] font-normal '>You have a account . <Link to="/register" className='jost text-[18px] font-bold text-[#1a685b]'>Register</Link> </p>
        </div>
    </div>
  )
}

export default LoginForm
