import React from 'react'
import Navbar from '../components/Navabar'
import cardOne from '../assets/cardOne.png'
import cardTwo from '../assets/cardTwo.png'
import { FaShoppingCart } from "react-icons/fa";

function PayementSuccesssfull() {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                {/* Top Nav Section */}
                <div className="d-flex align-items-center justify-content-between flex-wrap" style={{ gap: '20px' }}>
                    <div className="d-flex align-items-center" style={{ marginLeft: "10px" }}>
                        <i className="fa-solid fa-less-than" style={{ fontWeight: "bolder", marginRight: "4px", marginLeft: "20px" }}></i>
                        <span style={{ fontSize: "16px", fontWeight: "bolder" }}>Shopping Continue</span>
                    </div>
                    <div style={{ color: "#000", cursor: "pointer" }}>
                        <FaShoppingCart />
                    </div>
                </div>

                {/* Main Content */}
                <div className="row mt-4">
                    {/* Left Column: Items */}
                    <div className="col-12 col-md-6 mb-4">
                        {[{ image: cardOne, title: "Chat-Bot", price: "2000 RS" }, { image: cardTwo, title: "Face Recognition", price: "3000 RS" }].map((item, index) => (
                            <div key={index}
                                className="d-flex align-items-center justify-content-around bg-white rounded shadow-sm mb-3"
                                style={{
                                    height: '100px',
                                    padding: '20px',
                                    border: '1px solid #eee',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                                    gap: '10px',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt="product"
                                    style={{
                                        height: '100%',
                                        width: '80px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                                <div className="mx-2 flex-grow-1">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <small className="text-muted">AI Project</small>
                                </div>
                                <div>
                                    <h5 className="text-dark mb-0">{item.price}</h5>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Success Message */}
                    <div className="col-12 col-md-6">
                        <div className="success-container text-center p-3">
                            <div style={{marginTop:"-60px"}} className="success-circle mx-auto">
                                <span className="checkmark">&#10003;</span>
                            </div>
                            <p className="dark-text mt-4" style={{ fontWeight: "bolder", fontSize: "24px" }}>Your Order is Successfully placed</p>
                            <p>We sent an email to <strong>xyz@gmail.com</strong> with your order confirmation and bill</p>
                            <div className="text-start fw-bold mt-3">
                                <div>Time Placed: 20/02/2025 12.09 pm</div>
                                <div>Email: xyz@gmail.com</div>
                                <div>Phone No: +91 382628213</div>
                            </div>
                            <button className='btn mt-4' style={{ backgroundColor: "orange", color: "white" }}>
                                CONTINUE TO SHOPPING <i className="fa-solid fa-arrow-right-long ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Subtotal */}
                <div className='d-flex justify-content-center justify-content-md-start mt-4 flex-wrap' style={{ fontWeight: "bolder", fontSize: "20px", gap: '20px' }}>
                    <div>Subtotal:</div>
                    <div>5000 RS</div>
                </div>
            </div>
        </>
    )
}

export default PayementSuccesssfull
