import React from 'react'

const Support = () => {
    return (
        <section className='container mx-auto lg:flex justify-between h-auto my-20'>
            <div className="w-full lg:w-[45%] shadow-xl flex px-10 py-10">
                <div className='pr-5'>
                    <i className="fa-solid text-4xl text-secondary fa-circle-question"></i>
                </div>
                <div>
                    <h2 className='text-accent text-2xl font-bold'>View common questions</h2>
                    <p className='py-4'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.
                    </p>
                    <button className='btn-link flex items-center btn-primary'>Read More
                        <i className='fa-solid fa-arrow-right-long ml-3'></i>
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-[45%] mt-5 lg:mt-0 shadow-xl flex px-10 py-10">
                <div className='pr-5'>
                    <i className="fa-solid text-4xl text-secondary fa-headset"></i>
                </div>
                <div>
                    <h2 className='text-accent text-2xl font-bold'>
                        Looking for support?
                    </h2>
                    <p className='py-4'>On the other hand, we denounce with righteous dislike so men who are beguiled indignation and  they foresee.
                    </p>
                    <button className='btn-link flex items-center btn-primary'>Read More
                        <i className='fa-solid fa-arrow-right-long ml-3'></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Support