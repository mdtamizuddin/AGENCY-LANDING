import React from 'react'

const Skillls = () => {
    return (
        <section className='container mx-auto lg:flex'>
            <div className='lg:w-[50%] pr-10 py-10'>
                <h1 className='text-5xl font-bold text-accent'>Our skills & expertise</h1>
                <p className='text-xl my-6'>We help company set up business strategy including design brand identiy or product design service. So company can focus on their core business.  Morbi accumsan ipsum velit. Nam nec tellus.</p>
                <button className='btn rounded-3xl btn-primary bg-gradient-to-t from-primary to-secondary px-10 mt-10'>
                    We are in the press
                </button>
            </div>
            <div className='lg:w-[50%] lg:px-14 flex flex-col justify-center'>
                <p className='flex justify-between'><span>Branding</span> <span>96%</span></p>
                <progress class="progress progress-primary w-full" value="96" max="100"></progress>

                <p className='flex justify-between mt-8'><span>Design & Development</span> <span>81%</span></p>
                <progress class="progress progress-primary w-full" value="81" max="100"></progress> 
                
                <p className='flex justify-between mt-8'><span>Marketing</span> <span>85%</span></p>
                <progress class="progress progress-primary w-full" value="85" max="100"></progress>
                
                <p className='flex justify-between mt-8'><span>PR & Marketing</span> <span>90%</span></p>
                <progress class="progress progress-primary w-full" value="90" max="100"></progress>
            </div>
        </section>
    )
}

export default Skillls