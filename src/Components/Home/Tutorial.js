import React, { useState } from 'react'
import plyButton from '../Images/play-button.png'
const Tutorial = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='flex flex-col items-center py-20 border my-10'>
            <img
                onClick={() => setShow(true)}
                src={plyButton} alt=""
                className='hover:shadow-2xl rounded-full bg-transparent cursor-pointer shadow-primary' />
            <h1 className='text-center text-5xl font-bold text-accent mt-7'>How it works</h1>
            <p className='text-xl text-center mt-4'>This app does everything you could want it to do it <br /> is beautifully and extremely intuitive to use.</p>

            {
                show &&
                <Modal  setShow={setShow}/>
            }
        </div>
    )
}

export default Tutorial

function Modal({ show, setShow }) {
    return (
        <div
            className='w-full h-full bg-gray-200 flex justify-center items-center fixed top-0  bg-transparent'

        >
            <iframe className='lg:w-3/4 lg:h-3/5 w-full h-80' src="https://www.youtube.com/embed/BDliEq_0qeQ" title="How to Make a Tutorial Video" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

            <button onClick={()=> setShow(false)} className='fixed btn top-10 btn-error btn-outline'>Close</button>
        </div>
    )
}