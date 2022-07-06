import React from 'react'
import header from '../Images/db-1.png'
const Spilt2 = () => {
    return (
        <section className='container mx-auto lg:h-screen py-20 lg:py-0 flex flex-col justify-center'>
            <div className='flex lg:flex-row flex-col items-center'>


                <div className='lg:w-[40%] flex flex-col justify-center p-4'>
                    <h1 className='text-5xl font-black text-accent'>
                        We offer a full range of digital marketing services
                    </h1>
                    <p className='py-5 text-xl'>
                        Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free.
                    </p>
                    <div className="group mt-5">
                        <button className='btn rounded-3xl btn-primary bg-gradient-to-t from-primary to-secondary'>
                        View prices
                        </button>
                        <button className='btn btn-link'>
                            More info
                            <i className="fa-solid ml-3 fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
                <div className='w-[60%] flex justify-end'>
                    <img className='w-fit' src={header} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Spilt2