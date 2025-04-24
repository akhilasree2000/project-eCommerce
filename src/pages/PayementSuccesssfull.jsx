import React from 'react'
import Navbar from '../components/Navabar'
import cardOne from '../assets/cardOne.png'
import cardTwo from '../assets/cardTwo.png'
import { FaShoppingCart } from "react-icons/fa";



function PayementSuccesssfull() {
    return (
        <>


            <Navbar />

            <div >
            <div className="d-flex align-items-center " style={{ marginTop: "30px", gap:'90px' }}>
  <div className="d-flex align-items-center" style={{ marginLeft: "30px" }}>
    <i className="fa-solid fa-less-than" style={{ fontWeight: "bolder", marginRight: "4px", marginLeft:"40px" }}></i>
    <span style={{ fontSize: "16px", fontWeight: "bolder" }}>Shopping Continue</span>
  </div>
  <div style={{ color: "#000", cursor: "pointer" }}>
    <FaShoppingCart />
  </div>
</div>

               

                <div style={{ marginTop: "30px", marginInlineStart: "60px" }}>
                    <div className="row">
                        <div className="col-6">
                            <div
                                className="d-flex align-items-center justify-content-around bg-white rounded shadow-sm"
                                style={{
                                    height: '100px',
                                    padding: '20px',
                                    border: '1px solid #eee',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                                    gap: '10px',
                                }}
                            >
                                {/* Left Image */}
                                <img
                                    src={cardOne}
                                    alt="product"
                                    style={{
                                        height: '100%',
                                        width: '80px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />

                                {/* Center Text */}
                                <div className="mx-2 flex-grow-1">
                                    <h5 className="mb-1">Chat-Bot</h5>
                                    <small className="text-muted">AI Project</small>
                                </div>

                                {/* Right Price */}
                                <div>
                                    <h5 className="text-dark mb-0">2000 RS</h5>
                                </div>
                            </div>
                            <div
                                className="d-flex align-items-center justify-content-around bg-white rounded shadow-sm"
                                style={{
                                    height: '100px',
                                    padding: '20px',
                                    border: '1px solid #eee',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                                    gap: '10px',
                                }}
                            >
                                {/* Left Image */}
                                <img
                                    src={cardTwo}
                                    alt="product"
                                    style={{
                                        height: '100%',
                                        width: '80px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />

                                {/* Center Text */}
                                <div className="mx-2 flex-grow-1">
                                    <h5 className="mb-1">Face Recognition</h5>
                                    <small className="text-muted">AI Project</small>
                                </div>

                                {/* Right Price */}
                                <div>
                                    <h5 className="text-dark mb-0">3000 RS</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6"> <div className="success-container">
                            <div className="success-circle">
                                <span className="checkmark">&#10003;</span>
                            </div>
                            <p style={{ fontWeight: "bolder", fontSize: "30px" }} className="dark-text mt-4">Your Order is Successfully placed</p>
                            <p >We sent an email to xyz@gmail.com with your order confirmation and bill</p>
                            <div style={{ fontWeight: "bold" }}>
                                <div>Time Placed:20/02/2025 12.09 pm</div>
                                <div>email: xyz@gmail.com</div>
                                <div>phone no: +91 382628213</div>
                            </div>
                            <button style={{ backgroundColor: "orange", color: "white", marginTop: "30px" }} className='btn '>CONTINUE TO SHOPPING <i class="fa-solid fa-arrow-right-long "></i></button>
                        </div>
                        </div>

                    </div>
                </div>

                <div style={{ marginLeft: "200px", fontWeight: "bolder", fontSize: "25px" }} className='d-flex  gap-5'>
                    <div>Subtotal:</div>
                    <div>5000 RS</div>
                </div>

            </div>
        </>
    )
}

export default PayementSuccesssfull