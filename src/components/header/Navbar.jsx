import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from "../../assets/image/loggo.png"

const Navbar = () => {

let links = (
    <>
    <li>
        <NavLink to="/">Home</NavLink>
    </li>
    <li>
        <NavLink to="/donation-campain">Donation Campaigns</NavLink>
    </li>    
    <li>
        <NavLink to="/deshbord">Dashboard</NavLink>
    </li>
    </>
)

  return (
    <>
    <div className="bg-[#f7f7f7]">
      <div className="navbar container">        
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow jost text-[16px]">
                    {links}
                </ul>
                </div>
                <Link to="/" className=" text-xl">
                    <img className='w-[25%]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 jost text-[16px]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <Link className='btn bg-[#1A685B] text-white jost' to="/login">Login</Link>
                <Link className='btn bg-[#1A685B] text-white jost' to="/register">Register</Link>
            
            </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
