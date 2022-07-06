import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/Logo.png'
const Navbar = () => {
    return (
        <main>
            <NavbarTop />
            <div className="divider mt-1"></div>
            <NavbarBotton />
        </main>
    )
}

export default Navbar

function NavbarTop() {
    return (
        <div className='lg:flex justify-between container px-5 lg:px-0 mx-auto pt-3'>
            <p className='text-sm lg:text-base'>Trendy theme for companies, agencies and startups</p>
            <p className='text-sm lg:text-base mt-2'>
                <i className="fa-solid fa-phone mr-3"></i>
                +44 141 552 3000
            </p>
        </div>
    )
}

function NavbarBotton() {
    return (
        <div className="navbar container mx-auto mt-0 pt-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Navigations />
                    </ul>
                </div>
                <a className="normal-case">
                    <img src={logo} alt="" />
                </a>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Navigations />
                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:inline-flex">
                <button className='btn btn-outline btn-primary rounded-3xl'>Login</button>
                <span className='mx-3 text-xl'>or</span>
                <button className='btn btn-outline btn-primary rounded-3xl'>Create account</button>
            </div>
        </div>

    )
}
function Navigations() {
    return (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>Page</Link></li>
            <li><Link to={'/'}>Service</Link></li>
            <li><Link to={'/'}>Portfolio</Link></li>
            <li><Link to={'/'}>Blog</Link></li>
            <li><Link to={'/'}>Contact</Link></li>
        </>
    )
}