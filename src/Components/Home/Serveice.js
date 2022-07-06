import React from 'react'

const Serveice = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20 container mx-auto'>

            <div className="card1 lg:w-[80%] relative rounded-xl overflow-hidden">
                <div className='absolute rounded-2xl p-5 overflow-hidden w-full h-full overlay bg-gradient-to-t from-primary to-secondary items-start justify-center'>
                    <h2 className='text-3xl font-bold text-white mt-3'>Corporate finance</h2>
                    <p className='text-xl my-3 text-white'>
                        Leverage agile frameworks to <br /> provide a robust synopsis
                    </p>
                    <button className='text-xl   text-white'>Read More<i className="fa-solid ml-3 fa-arrow-right-long"></i></button>
                </div>
                <div className='w-full h-full my-10 mx-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className='text-3xl font-bold text-accent mt-3'>Corporate finance</h2>
                    <p className='text-xl mt-2'>
                        Leverage agile frameworks to <br /> provide a robust synopsis
                    </p>
                </div>
            </div>

            <div className="card1 lg:w-[80%] relative rounded-xl overflow-hidden">
                <div className='absolute rounded-2xl p-5 overflow-hidden w-full h-full overlay bg-gradient-to-t from-primary to-secondary items-start justify-center'>
                    <h2 className='text-3xl font-bold text-white mt-3'>Audit & Evaluation</h2>
                    <p className='text-xl my-3 text-white'>
                        Leverage agile frameworks to <br /> provide a robust synopsis
                    </p>
                    <button className='text-xl   text-white'>Read More<i className="fa-solid ml-3 fa-arrow-right-long"></i></button>
                </div>
                <div className='w-full h-full my-10 mx-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <h2 className='text-3xl font-bold text-accent mt-3'>Audit & Evaluation</h2>
                    <p className='text-xl mt-2'>
                        Leverage agile frameworks to <br /> provide a robust synopsis
                    </p>
                </div>
            </div>
            <div className="card1 lg:w-[80%] relative rounded-xl overflow-hidden">
                <div className='absolute rounded-2xl p-5 overflow-hidden w-full h-full overlay bg-gradient-to-t from-primary to-secondary items-start justify-center'>
                    <h2 className='text-3xl font-bold text-white mt-3'>Market analysis</h2>
                    <p className='text-xl my-3 text-white'>
                        Leverage agile frameworks to <br /> provide a robust synopsis
                    </p>
                    <button className='text-xl   text-white'>Read More<i className="fa-solid ml-3 fa-arrow-right-long"></i></button>
                </div>
                <div className='w-full h-full my-10 mx-5'>
                <i class="fa-solid text-4xl text-primary fa-magnifying-glass-chart"></i>
                    <h2 className='text-3xl font-bold text-accent mt-3'>Market analysis</h2>
                    <p className='text-xl mt-2'>
                        Leverage agile frameworks to <br /> provide a robust synopsis
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Serveice