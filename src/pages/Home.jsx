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
import '../App.css'



// Your imports remain the same

function Home() {
    return (
        <>
            <Navbar />

            <div className="d-flex justify-content-center align-items-center gap-3 bg-secondary text-white" style={{ height: "25px" }}>
                <i className="fa-solid fa-house"></i>
                HOME
            </div>

            <div className="w-100 bg-light" style={{ marginTop: "20px", height: "auto" }}>
                <div className="row container mx-auto py-5">
                    <div className="col-12 col-md-6 text-center text-md-start my-auto">
                        <h2 className="text-primary">Looking For Your Next Project?</h2>
                        <h5 className="text-info mt-3 lh-base">Check out the wide variety of projects in our <br /> database. Projects from all fields are available.</h5>
                        <button className='btn btn-outline-dark mt-5'>Read More <i className="fa-solid fa-arrow-right ps-2"></i></button>
                    </div>
                    <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
                        <img className='img-fluid' width="300px" src={projImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center bg-light py-5">
                <div className="bg-danger text-white rounded p-4 w-100 mx-3 mx-md-5 text-center">
                    <h1 className="display-5">SEARCH YOUR PROJECT</h1>
                    <h4 className="mt-3 ">Looking for something specific? Look it up in our vast library of projects.</h4>
                    <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
                        <FaSearch className="align-self-center" />
                        <input type="text" className="form-control w-50" placeholder="Search..." />
                        <button className="btn btn-light">SEARCH</button>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-between align-items-center flex-wrap py-4 bg-white shadow rounded">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                    <div className="bg-warning" style={{ width: "5px", height: "40px" }}></div>
                    <span className="ms-3 text-danger fs-5">Categories</span>
                </div>
                <div className="d-flex gap-4">
                    <ArrowLeft className="text-dark cursor-pointer" />
                    <ArrowRight className="text-white bg-danger rounded p-1" />
                </div>
            </div>

            <div className="text-center mt-5">
                <h1>Explore Our Top Categories</h1>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-wrap gap-4 mt-5'>
                <div className='text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgOne} />
                    </Card>
                    <h5 className='mt-2'>AL & ML</h5>
                </div>

                <div className='text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgTwo} />
                    </Card>
                    <h5 className='mt-2'>Web Development</h5>
                </div>

                <div className='text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgThree} />
                    </Card>
                    <h5 className='mt-2'>Electronics Engineering</h5>
                </div>
            </div>

            <div className="text-center mt-4">
                <button className='btn btn-outline-dark'>VIEW MORE <i className="fa-solid fa-arrow-right ms-2"></i></button>
            </div>

            <div className="bg-light py-5 text-center">
                <h2 className="fw-bold">New Release Projects</h2>

                <div className='d-flex justify-content-center align-items-center flex-wrap gap-4 mt-5'>
                    {[
                        { img: picOne, title: 'Spam Filtering', price: '1500 rs' },
                        { img: picTwo, title: 'Face Recognition', price: '3000 rs' },
                        { img: picThree, title: 'Online Food Delivery', price: '3000 rs' },
                        { img: picFour, title: 'Text To Speech Converter', price: '1500 rs' }
                    ].map((item, index) => (
                        <div key={index} className='text-center'>
                            <Card style={{ width: '15rem', position: 'relative' }}>
                                <Card.Img variant="top" src={item.img} />
                                {index === 0 && (
                                    <button className="btn btn-danger position-absolute start-50 translate-middle-x bottom-0 mb-2 w-75">
                                        Add to Cart
                                    </button>
                                )}
                            </Card>
                            <h5 className='mt-2'>{item.title}</h5>
                            <h6 className="text-muted">AI Project</h6>
                            <span className="text-danger fs-5">{item.price}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-5">
                    <h4 className="text-danger">View All Products</h4>
                </div>
            </div>

            <div className="container text-center py-5">
                <h2>Featured Projects</h2>
                <div className="row mt-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-md-6 text-start">
                        <h3>Online Food Delivery System</h3>
                        <hr className="border-danger w-25" />
                        <h6 className="text-muted">WEB DEVELOPER PROJECT</h6>
                        <p>Looking to create a food delivery system website for your eatery? Well, look no further with our food delivery system kit...</p>
                        <span className="text-danger fs-5">3000 rs</span><br />
                        <button className='btn btn-outline-dark mt-2'>View More <i className="fa-solid fa-arrow-right ms-2"></i></button>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row bg-light py-5 rounded align-items-center">
                    <div className="col-md-6 text-center text-md-start px-5">
                        <h2>All books are 50% off now!<br />Don't miss such a deal!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit, modi necessitatibus totam...</p>
                        <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3 flex-wrap">
                            <div><span className="text-danger fs-5">768</span><br />DAYS</div>
                            <div><span className="text-danger fs-5">01</span><br />HOURS</div>
                            <div><span className="text-danger fs-5">27</span><br />MINT</div>
                            <div><span className="text-danger fs-5">65</span><br />SEC</div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center mt-4 mt-md-0">
                        <img className='img-fluid' src={book} alt="" />
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <h1>Latest Articles</h1>
                <div className='d-flex justify-content-center flex-wrap gap-4 mt-4'>
                    {[artOne, artTwo, artThree].map((img, i) => (
                        <Card key={i} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <span style={{ color: "#926F34" }}>2 Aug, 2021</span>
                                <Card.Text>Reading Books Always Makes The Moments Happy</Card.Text>
                                <div className='d-flex justify-content-end gap-2'>
                                    <FaFacebookF className='text-primary' />
                                    <FaTwitter className='text-info' />
                                    <FaInstagram className='text-danger' />
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <button className='btn btn-outline-dark mt-5'>READ ALL ARTICLES <i className="fa-solid fa-arrow-right ms-2"></i></button>
            </div>

            <Footer />
        </>
    );
}

export default Home;
