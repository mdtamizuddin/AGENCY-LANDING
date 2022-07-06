import React from 'react'

const Card1 = () => {
    return (
        <div className="card w-full hover:bg-gradient-to-b from-primary to-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <h2 className='text-3xl font-bold text-accent'>Corporate finance</h2>
        </div>
    )
}

export default Card1