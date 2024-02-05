import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);
    const [search, setSearch] = useState('');

    const loadData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/displaydata', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setFoodItems(data[0]);
            setFoodCategory(data[1]);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <Navbar />
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
                    <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/1000x1000?pizza" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/1000x1000?pasta" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/1000x1000?burger" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {foodCategory && foodCategory !== [] ? foodCategory.map((category) => {
                    return (
                        <div className='mb-3 row'>
                            <div key={category._id} className='m-3 fs-3 text-white'>{category.CategoryName}</div>
                            <hr />
                            {foodItems && foodItems !== [] ? foodItems.filter((item) => (item.CategoryName === category.CategoryName) && item.name.toLowerCase().includes(search.toLocaleLowerCase())).map((items) => {
                                return (
                                    <div className="col-12 col-md-4 col-lg-3 col-sm-6">
                                        <Card key={items._id}
                                            foodItem={items}
                                            options={items.options[0]}
                                        />
                                    </div>
                                )
                            }) : <div className='text-white'>No data found</div>}
                        </div>
                    )
                }) : <div className='text-white'>No data found</div>}
            </div>
            <Footer />
        </>
    )
}
