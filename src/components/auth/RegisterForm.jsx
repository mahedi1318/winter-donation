import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import UseAuth from '../../hook/UseAuth'
import { getAuth, sendEmailVerification } from "firebase/auth";



const RegisterForm = () => {

  const auth = getAuth();
  const {createAccount} = UseAuth()
  const navigate = useNavigate()

  const {register, handleSubmit, watch, reset, formState: { errors }, } = useForm()  

  const onSubmites = (data) =>{
    const {name, email, password} = data;
    console.log(name)   
    createAccount(email, password).then((result)=>{
      sendEmailVerification(auth.currentUser).then(()=>{
        console.log("verification")
        reset()
        navigate("/")
      })
    }).catch((err)=>{
      console.log(err.message)
    })
  }



  return (
    <div className="bg-[#f5f5f5] py-10 px-10 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmites)}>
        <div className="">
            <label className='block outfit text-[16px] font-medium' htmlFor="">User Name</label>
            <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' {...register("name")} type="text" name='name' placeholder='user name' required/>
        </div>
        <div className="mt-5">
            <label className='block outfit text-[16px] font-medium' htmlFor="">Email</label>
            <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' {...register("email")} type="email" name='email' placeholder='Email' required/>
        </div>
        <div className="mt-5">
            <label className='block outfit text-[16px] font-medium' htmlFor="">Password</label>
            <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' {...register("password")} type="password" name='password' placeholder='Password' required/>
        </div>
        <div className='mt-2'><Link to="/resetPassword" className="link link-hover outfit text-[17px] font-semibold">Forgot password?</Link></div>
        <button className="btn btn-neutral bg-[#1a685b] border-0 mt-4 w-full">Register</button>
        </form>
        <div className="text-center mt-8">
        <p className='jost text-[16px] font-normal '>You have a account . <Link to="/login" className='jost text-[18px] font-bold text-[#1a685b]'>Login</Link> </p>
        </div>
    </div>
  )
}

export default RegisterForm
