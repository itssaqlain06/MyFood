import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <div className='d-flex flex-wrap gap-3'>
                <Card />
            </div>
            <Footer />
        </>
    )
}
