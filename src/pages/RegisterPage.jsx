import React from 'react'
import { Link } from 'react-router'

const RegisterPage = () => {
  return (
    <div className='py-20 mt-[150px]'>
      <div className="container">
        <div className="w-[900px] mx-auto">
       <div className="grid grid-cols-2 gap-[40px]">
        <div className="bg-[#f5f5f5] py-10 px-10 rounded-2xl">
          <form action="">
            <div className="">
              <label className='block outfit text-[16px] font-medium' htmlFor="">User Name</label>
              <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' type="text" name='name' placeholder='user name' required/>
            </div>
            <div className="mt-5">
              <label className='block outfit text-[16px] font-medium' htmlFor="">Email</label>
              <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' type="email" name='email' placeholder='Email' required/>
            </div>
            <div className="mt-5">
              <label className='block outfit text-[16px] font-medium' htmlFor="">Password</label>
              <input className='outfit text-[16px] font-normal border pl-[10px] w-full h-[40px] mt-1 rounded-lg' type="password" name='password' placeholder='Password' required/>
            </div>
            <div className='mt-2'><a className="link link-hover outfit text-[17px] font-semibold">Forgot password?</a></div>
            <button className="btn btn-neutral bg-[#1a685b] border-0 mt-4 w-full">Register</button>
          </form>
          <div className="text-center mt-8">
            <p className='jost text-[16px] font-normal '>You have a account . <Link to="/login" className='jost text-[18px] font-bold text-[#1a685b]'>Login</Link> </p>
          </div>
        </div>
        <div className="text-center mt-[100px]">
          <h3 className='young_serif text-[35px] font-semibold'>Register Now</h3>
          <p className='jost text-[16px] font-normal mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente veritatis non ad et quisquam obcaecati iure tenetur aspernatur maiores ducimus? Nam accusantium 
            voluptate recusandae delectus numquam necessitatibus? Labore, deleniti exercitationem?</p>
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default RegisterPage
