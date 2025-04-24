import React from 'react'
import Navbar from '../components/Navabar'
import projImg from '../assets/projImg.png'
import { FaSearch } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import imgOne from '../assets/img1.png'
import imgTwo from '../assets/img2.png'
import imgThree from '../assets/img3.png'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import picOne from '../assets/pic1.png'
import picTwo from '../assets/picTwo.png'
import picThree from '../assets/pic3.png'
import picFour from '../assets/pic4.png'
import Image from '../assets/image.png'
import book from '../assets/book.png'
import artOne from '../assets/articleOne.png'
import artTwo from '../assets/artTwo.png'
import artThree from '../assets/art3.png'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from '../components/Footer';



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
                background: "#FCEBEA"
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
                    background: '#FCEBEA',
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

            <button style={{ marginLeft: "700px", marginTop: "30px", width: "200px" }} className='btn btn-outline-dark p-3'>VIEW MORE <i class="fa-solid fa-arrow-right ms-2"></i></button>


            {/* Release Section */}


            <div style={{
                background: '#FCEBEA',
                textAlign: 'center',
                padding: '50px',
                fontSize: '24px',
                fontWeight: 'bold',
                marginTop: "20px",
                height: "600px"
            }}>
                New Release Projects

                <div style={{ marginTop: "100px", gap: "30px" }} className='d-flex justify-content-center align-items-center'>

                    <div className='d-flex flex-column align-items-center'>
                        <Card style={{ width: '18rem', position: 'relative' }}>
                            <Card.Img variant="top" src={picOne} />

                            {/* Overlay Button */}
                            <button
                                style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    padding: '5px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    width: '80%',
                                }}
                            >
                                Add to Cart
                            </button>
                        </Card>

                        <h5 className='mt-2'>Spam Filtering</h5>
                        <h6 className="dimmed-heading">AI Project</h6>
                        <span style={{ color: "red", fontSize: "20px" }}>1500 rs</span>
                    </div>


                    <div className='d-flex flex-column align-items-center'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={picTwo} />
                        </Card>
                        <h5 className='mt-2'>Face Recognition</h5>
                        <h6 class="dimmed-heading">AI Project</h6>
                        <span style={{ color: "red", fontSize: "20px" }}>3000 rs</span>
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={picThree} />
                        </Card>
                        <h5 className='mt-2'>Online Food Delivery</h5>
                        <h6 class="dimmed-heading">AI Project</h6>
                        <span style={{ color: "red", fontSize: "20px" }}>3000 rs</span>
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={picFour} />
                        </Card>
                        <h5 className='mt-2'>Text To Speech Converter</h5>
                        <h6 class="dimmed-heading">AI Project</h6>
                        <span style={{ color: "red", fontSize: "20px" }}>1500 rs</span>
                    </div>

                </div>
                <h4 style={{ marginTop: "80px", marginLeft: "900px", color: "red" }}>View All  products</h4>
            </div>



            {/* featured projects section */}

            <div style={{
                textAlign: 'center',
                padding: '50px',
                fontSize: '50px',
                fontWeight: 'bold',
                marginTop: "20px",
                height: "600px"
            }}>
                Featured Projects

                <div className="row mt-5">
                    <div className="col-6 d-flex justify-content-center ">
                        <img className='img-fluid' width="75%" src={Image} alt="" />
                    </div>
                    <div className="col-6">
                        <div className="text-center">
                            <h3 style={{ marginLeft: "-370px" }}>Online Food Delivery System</h3>
                            <hr style={{ width: "130px", border: "2px solid red", marginLeft: "30px", marginTop: "50px" }} />
                            <h5 style={{ fontSize: "10px", marginLeft: "-600px" }}>WEB DEVELOPER PROJECT</h5>
                            <p style={{ fontSize: "16px", textAlign: "justify", padding: "10px 30px" }}>
                                Looking to create a food delivery system website for your eatery? Well, look no further with our food delivery system kit. Any changes necessary can be made to cater to your needs. Also comes with 24/7 support from us.
                            </p>
                            <span style={{ color: "red", fontSize: "20px", marginLeft: "-650px" }}>3000 rs</span>

                        </div>
                        <button style={{ marginLeft: "-600px", padding: "15px" }} className='btn btn-outline-dark'>View More <i class="fa-solid fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div>


            {/* book section */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: "200px"
            }}>
                <div style={{
                    backgroundColor: '#FCEBEA',
                    width: '85%',
                    height: '500px'
                }}>
                    <div className="row">
                        <div className="col">
                            <p style={{ marginLeft: "200px", marginTop: "100px", fontSize: "40px" }}>All books are 50% off now!<br />
                                Don't miss such a deal!</p>
                            <p style={{ textAlign: "justify", marginLeft: "190px", marginRight: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit, modi necessitatibus totam harum adipisci quo, facilis.</p>

                            <div style={{ gap: "20px" }} className='d-flex justify-content-center align-items-center'>
                                <div> <span style={{ color: 'red', fontSize: "20px" }}>768</span> <br /> DAYS</div>
                                <div><span style={{ color: 'red', fontSize: "20px" }}>01</span> <br />HOURS</div>
                                <div><span style={{ color: 'red', fontSize: "20px" }}>27</span> <br />MINT</div>
                                <div><span style={{ color: 'red', fontSize: "20px" }}>65</span> <br />SEC</div>
                            </div>

                        </div>
                        <div className="col">
                            <img style={{ marginTop: "80px" }} className='img-fluid' src={book} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* article section */}
            <div style={{
                marginTop: "100px"
            }}>
                <h1 style={{ marginLeft: "700PX" }}> Latest Articles</h1>


                <div className='d-flex justify-content-center align-items-center mt-5 gap-5'>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={artOne} />
                            <Card.Body>
                                <span style={{ color: "#926F34" }}>2 Aug, 2021</span>
                                <Card.Text>
                                    Reading Books Always Makes The Moments Happy
                                </Card.Text>

                                {/* Social Icons - aligned to the right */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                    <FaFacebookF style={{ cursor: 'pointer', color: '#3b5998' }} />
                                    <FaTwitter style={{ cursor: 'pointer', color: '#1da1f2' }} />
                                    <FaInstagram style={{ cursor: 'pointer', color: '#e1306c' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={artTwo} />
                            <Card.Body>
                                <span style={{ color: "#926F34" }}>2 Aug, 2021</span>
                                <Card.Text>
                                    Reading Books Always Makes The Moments Happy
                                </Card.Text>

                                {/* Social Icons - aligned to the right */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                    <FaFacebookF style={{ cursor: 'pointer', color: '#3b5998' }} />
                                    <FaTwitter style={{ cursor: 'pointer', color: '#1da1f2' }} />
                                    <FaInstagram style={{ cursor: 'pointer', color: '#e1306c' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={artThree} />
                            <Card.Body>
                                <span style={{ color: "#926F34" }}>2 Aug, 2021</span>
                                <Card.Text>
                                    Reading Books Always Makes The Moments Happy
                                </Card.Text>

                                {/* Social Icons - aligned to the right */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                    <FaFacebookF style={{ cursor: 'pointer', color: '#3b5998' }} />
                                    <FaTwitter style={{ cursor: 'pointer', color: '#1da1f2' }} />
                                    <FaInstagram style={{ cursor: 'pointer', color: '#e1306c' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

                <button style={{ marginLeft: "700px", marginTop: "100px" }} className='btn btn-outline-dark p-2'>READ ALL ARTICLES <i class="fa-solid fa-arrow-right ms-2"></i></button>

            </div>
            <Footer/>
        </>
    )
}

export default Home