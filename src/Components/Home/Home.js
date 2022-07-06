import React from 'react'
import Pricing from './Pricing'
import Serveice from './Serveice'
import Skillls from './Skillls'
import Spilt from './Spilt'
import Spilt2 from './Spilt2'
import Tutorial from './Tutorial'

const Home = () => {
    return (
        <main className=''>
            <Serveice />
            <Spilt />
            <Tutorial />
            <Spilt2 />
            <Skillls />
            <Pricing />
        </main>
    )
}

export default Home