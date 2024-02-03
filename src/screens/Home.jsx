import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
    // const loadData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/api/displaydata', {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         const json = await response.json();
    //         console.log(json);
    //         if (!json.success) {
    //             alert("You have provided invalid credentials");
    //         }
    //         if (json.success === true) {
    //             navigate('/');
    //         }

    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
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
