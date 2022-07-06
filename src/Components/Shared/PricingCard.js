import React from 'react'

const PricingCard = ({ bestChoice , name , price}) => {

    return (
        <div className='hover:shadow-2xl rounded-lg w-[90%] lg:w-[80%] py-10 px-10'>
            <span className='flex justify-between items-center'>
                <h2 className='text-3xl text-accent font-bold'>{name}</h2>
                {bestChoice && <h3 className='text-secondary font-black text-sm'>Best Choice</h3>}
            </span>
            <h1 className='font-black text-6xl mt-10 text-accent'>{price}</h1>
            <p className='mt-3'>Per Month</p>
            <div className='text-xl mt-10'>
                <p className='mt-4'>
                    <i className="fa-solid mr-3 text-primary fa-check"></i>
                    Free update
                </p>
                <p className='mt-4'>
                    <i className="fa-solid mr-3 text-primary fa-check"></i>
                    Custom doamin
                </p>
                <p className='mt-4'>
                    <i className="fa-solid mr-3 text-primary fa-check"></i>
                    Outstanding support
                </p>
                <p className='mt-4'>
                    <i className="fa-solid mr-3 text-error fa-xmark"></i>
                    Unlimited Storage
                </p>
                <p className='mt-4'>
                    <i className="fa-solid mr-3 text-error fa-xmark"></i>
                    Build responsive website
                </p>
                <button className='btn rounded-3xl btn-primary bg-gradient-to-t from-primary to-secondary px-10 mt-14 font-bold'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default PricingCard