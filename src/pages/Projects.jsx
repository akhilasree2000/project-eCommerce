import React from 'react'
import Navbar from '../components/Navabar'
import cardOne from '../assets/cardOne.png'
import cardTwo from '../assets/cardTwo.png'
import cardThree from '../assets/cardThree.png'
import cardFour from '../assets/cardFour.png'
import Card from 'react-bootstrap/Card';
import cards from '../assets/cards.png'
import cardSix from '../assets/cardSix.png'
import cardSeven from '../assets/cardSeven.png'
import cardEight from '../assets/cardEight.png'
import images from '../assets/images.png'
import imageOne from '../assets/imageOne.png'
import imageTwo from '../assets/imageTwo.png'
import imageThree from '../assets/imageThree.png'

function Projects() {
    return (
        <>
            <Navbar />

            <div style={{
                display: 'flex',
                minHeight: '100vh',
                fontFamily: 'Arial, sans-serif'
            }}>

                {/* Sidebar */}
                <aside style={{
                    width: '350px',
                    backgroundColor: "#ECECEC",
                    color: 'black',
                    padding: '20px',
                    boxSizing: 'border-box',
                    borderRight: "2px solid #ACADAC",
                    position: 'sticky',
                    top: 0,
                    alignSelf: 'flex-start',
                }}>
                    <h2 style={{ marginTop: 0, fontSize: "20px", fontWeight: "bolder" }}>CATEGORY</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><label><input type="checkbox" /> All Projects</label></li>
                        <li><label><input type="checkbox" /> Web Development Projects</label></li>
                        <li><label><input type="checkbox" /> Cloud Projects</label></li>
                        <li><label><input type="checkbox" /> Electrical Engineering Projects</label></li>
                        <li><label><input type="checkbox" /> Cyber Security Projects</label></li>
                        <li><label><input type="checkbox" /> IoT Projects</label></li>
                        <li><label><input type="checkbox" /> Machine Learning Projects</label></li>
                        <li><label><input type="checkbox" /> Gaming Projects</label></li>
                        <li><label><input type="checkbox" /> Mechanical Projects</label></li>
                        <li><label><input type="checkbox" /> Automobile Projects</label></li>
                        <li><label><input type="checkbox" /> App Development Projects</label></li>
                        <li><label><input type="checkbox" /> Data Science Projects</label></li>
                    </ul>

                    <h6 style={{ marginTop: "30px" }}>PRICE RANGE</h6>
                    <div className="slider-container" style={{ marginTop: "20px" }}>
                        <div className="range-slider">
                            <div className="slider-track">
                                <div className="slider-range"></div>
                            </div>
                            <div className="circle left-circle"></div>
                            <div className="circle right-circle"></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: "30px" }}>
                        <div style={{ backgroundColor: 'white', width: '120px', padding: '5px', textAlign: 'center', border: '1px solid #ccc' }}>
                            Min Price
                        </div>
                        <div style={{ backgroundColor: 'white', width: '120px', padding: '5px', textAlign: 'center', border: '1px solid #ccc' }}>
                            Max Price
                        </div>
                    </div>

                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                        <li><label><input type="checkbox" /> All Price</label></li>
                        <li><label><input type="checkbox" /> 501 Rs to 1,000 Rs</label></li>
                        <li><label><input type="checkbox" /> 1,001 Rs to 2,000 Rs</label></li>
                        <li><label><input type="checkbox" /> 2,001 Rs to 3,000 Rs</label></li>
                        <li><label><input type="checkbox" /> 3,001 Rs to 4,000 Rs</label></li>
                        <li><label><input type="checkbox" /> 4,001 Rs to 6,000 Rs</label></li>
                    </ul>
                </aside>

                {/* Right Content */}
                <div style={{ flex: 1 }}>
                    <div style={{ backgroundColor: 'grey', height: '30px', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto', marginLeft: "100px" }}>
                                <i className="fas fa-home" style={{ fontSize: '18px', marginRight: '8px' }}></i>
                                <span style={{ fontSize: '20px' }}>Home</span>
                                <span style={{ fontSize: '16px', fontWeight: 'normal' }}>
                                    <i style={{ marginLeft: "20px" }} className="fa-solid fa-greater-than"></i> Projects
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '10px', color: "#393280" }}>
                        <h3 style={{ fontSize: "50px" }}>Projects</h3>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px', paddingRight: '100px' }}>
                        <span style={{ fontSize: '18px', marginRight: '10px' }}>Sort By:</span>
                        <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
                            <select style={{ padding: '5px', backgroundColor: "white" }}>
                                <option value="most-popular">Most Popular</option>
                            </select>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-5 flex-wrap'>
                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px', position: 'relative' }}>
                                <Card.Img variant="top" src={cardOne} style={{ height: '200px', objectFit: 'cover' }} />
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
                            <h5 className='mt-2'>Chat-Bot</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>2000 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={cardTwo} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Face Recognition</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>3000 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={cardThree} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Sales Predictor</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>2500 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={cardFour} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Online Food Delivery</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>3000 rs</span>
                        </div>
                    </div>


                    {/* second card section */}
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-5 flex-wrap'>
                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px', position: 'relative' }}>
                                <Card.Img variant="top" src={cards} style={{ height: '200px', objectFit: 'cover' }} />
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
                            <h5 className='mt-2'>Analog Clock</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>500 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={cardSix} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Text To Speech Converter</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>1500 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={cardSeven} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>AI-Image Generator</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>2300 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={cardEight} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Online Calculator</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>300 rs</span>
                        </div>
                    </div>




                    {/* third card section */}
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-5 flex-wrap'>
                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px', position: 'relative' }}>
                                <Card.Img variant="top" src={images} style={{ height: '200px', objectFit: 'cover' }} />
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
                            <h5 className='mt-2'>To-Do-List</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>400 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={imageOne} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>User Management System</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>2300 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={imageTwo} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Efficient Mini Inverter</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>2100 rs</span>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <Card style={{ width: '250px', height: '200px' }}>
                                <Card.Img variant="top" src={imageThree} style={{ height: '200px', objectFit: 'cover' }} />
                            </Card>
                            <h5 className='mt-2'>Spam Filter</h5>
                            <span style={{ color: "red", fontSize: "20px" }}>1500 rs</span>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Projects;
