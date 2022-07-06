import React from 'react'
import header from '../Images/spilt.png'
const Spilt = () => {
    return (
        <section className='container mx-auto lg:h-screen py-20 lg:py-0 flex flex-col justify-center'>
            <div className='flex lg:flex-row flex-col items-center'>
                <div className='w-[60%] flex justify-start'>
                    <img className='w-fit' src={header} alt="" />
                </div>

                <div className='lg:w-[40%] flex flex-col justify-center p-4'>
                    <h1 className='text-5xl font-black text-accent'>
                    Get the ultimate tool and learn how to grow your audience
                    </h1>
                    <p className='py-5 text-xl'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Many desktop publishing packages and web.
                    </p>
                    <div className="group mt-5">
                        <button className='btn rounded-3xl btn-primary bg-gradient-to-t from-primary to-secondary'>
                            Get Started
                        </button>
                        <button className='btn btn-link'>
                            Read More
                            <i className="fa-solid ml-3 fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Spilt