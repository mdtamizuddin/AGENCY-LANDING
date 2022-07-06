import React from 'react'
import header from '../Images/Header.png'
const Header = () => {
    return (
        <header className='relative container mx-auto lg:h-screen py-20 lg:py-0 flex flex-col justify-center'>
            <div className='flex lg:flex-row flex-col items-center'>
                <div className='lg:w-[30%] flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold text-accent'>
                        Realize your <br /> full potential
                    </h1>
                    <p className='py-5 text-xl'>
                        We help our clients make realize <br /> their most important business goals.
                    </p>
                    <div className="group mt-5">
                        <button className='btn rounded-3xl btn-primary bg-gradient-to-t from-primary to-secondary'>
                            Contact us
                        </button>
                        <button className='btn btn-link'>
                            Order similar
                            <i className="fa-solid ml-3 fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
                <div className='w-[70%] flex justify-end'>
                    <img className='w-fit' src={header} alt="" />
                </div>
            </div>
            <div className='absolute bottom-0 flex justify-center w-full'>
                <button
                    className='animate-bounce text-white flex items-center justify-center rounded-full w-24 h-24 text-2xl bg-gradient-to-b from-primary to-secondary'>
                    <i className="fa-solid  fa-arrow-down"></i>
                </button>
            </div>
        </header>
    )
}

export default Header