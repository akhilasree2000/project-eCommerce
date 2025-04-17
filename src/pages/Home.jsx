import React from 'react'
import Navbar from '../components/Navabar'
import projImg from '../assets/projImg.png'
import { FaSearch } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import imgOne from '../assets/img1.png'
import imgTwo from '../assets/img2.png'
import imgThree from '../assets/img3.png'
import { ArrowLeft, ArrowRight } from 'lucide-react';


function Home() {
    return (
        <>

            <Navbar />

            <div style={{
                height: "25px",
                width: "100%",
                backgroundColor: "#a9a9a9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px"
            }}>
                <i class="fa-solid fa-house"></i>
                HOME
            </div>


            <div style={{
                marginTop: "20px",
                width: "100%",
                height: "500px",
                background: "linear-gradient(to right, #FFD9A0, #FFFFFF)"
            }}>

                <div className="row">
                    <div style={{ marginTop: "80px" }} className="col-6">
                        <h2 style={{ color: "#0A2472", marginLeft: "300px" }}>Looking For Your Next Project?</h2>
                        <h5 style={{ color: "#123499", marginLeft: "300px", marginTop: "20px", textAlign: "justify", lineHeight: "1.8" }}>Check out the wide variety of projects in our <br /> database. Projects from all fields are available.</h5>
                        <button style={{ marginLeft: "300px", marginTop: "70px" }} className='btn btn-outline-dark'>Read More <i style={{ padding: '10px' }} class="fa-solid fa-arrow-right"></i></button>

                    </div>
                    <div className="col-6" style={{ marginTop: "90px", borderRadius: "40px" }}><img className='img-fluid' width="300px" src={projImg} alt="" /></div>
                </div>
            </div>


            {/* third section */}
            <div
                style={{
                    marginTop: "40px",
                    height: "400px",
                    background: 'linear-gradient(to right, #FFD9A0, #FFFFFF)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '1500px',
                        height: '300px',
                        marginTop: "-100px",
                        backgroundColor: '#FF6347',
                        borderRadius: '10px',
                    }}
                >

                    <h1 style={{ marginLeft: "400px", marginTop: "60px", fontSize: "50px", color: "white" }}>SEARCH YOUR PROJECT</h1>
                    <h4 style={{ marginLeft: "300px", marginTop: "40px", color: "white" }}>Looking for something specific? Look it up in our vast library  of projects.</h4>

                    <div style={{ marginLeft: "500px", marginTop: "70px" }} className="search-container">
                        <FaSearch className="search-icon" />
                        <input style={{ padding: "20px" }} type="text" className="search-input" />
                        <button style={{ width: "200px", fontSize: "20px" }} className="right-box">SEARCH</button>
                    </div>
                </div>
            </div>



            {/* fourth section */}

            <div
                style={{ marginTop: "40px", marginBottom: "-100px" }}
                className="container d-flex align-items-center justify-content-between w-full p-4 bg-white shadow-md rounded-xl"
            >
                {/* Left Side */}
                <div className="flex items-center space-x-3">
                    <div className="w-1 h-10 bg-orange-500 rounded"></div>
                    <span style={{ marginLeft: "200px", color: "#FF6347", fontSize: "20px" }} className="text-lg font-semibold">Categories</span>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Left Arrow */}
                    <ArrowLeft className="text-black cursor-pointer hover:scale-110 transition-transform" />

                    {/* Right Arrow styled like Left, with yellow color */}
                    <ArrowRight style={{ backgroundColor: "#FF6347", color: "white", marginLeft: "30px" }} className="text-yellow-500 cursor-pointer hover:scale-110 transition-transform" />
                </div>

            </div>



            <div style={{ marginLeft: "400px", marginTop: "100px", marginBottom: "-50px" }}>
                <h1>Explore Our Top Categories</h1>
            </div>

            <div style={{ marginTop: "100px", gap: "30px" }} className='d-flex justify-content-center align-items-center'>

                <div className='d-flex flex-column align-items-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgOne} />
                    </Card>
                    <h5 className='mt-2'>AL & ML</h5>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgTwo} />
                    </Card>
                    <h5 className='mt-2'>Web Development</h5>
                </div>

                <div className='d-flex flex-column align-items-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgThree} />
                    </Card>
                    <h5 className='mt-2'>Electronics Engineering</h5>
                </div>

            </div>

        </>
    )
}

export default Home