import React from 'react'
import PricingCard from '../Shared/PricingCard'

const Pricing = () => {
    return (
        <div
            className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2
            grid-cols-1 gap-10 my-20 justify-items-center'
        >
            <PricingCard bestChoice={true} name={"Basic"} price={'15$'} />
            <PricingCard name={"Standard"} price={'37$'} />
            <PricingCard name={"Advance"} price={'42$'} />
        </div>
    )
}

export default Pricing