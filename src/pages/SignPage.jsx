import React from 'react'
import Navbar from '../components/Navabar'
import "bootstrap/dist/css/bootstrap.min.css";

function SignPage() {
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
                <div className="login-card col-lg-5 col-md-7 col-11">
                    <div className="row">
                        <div className="col-6">

                            <h5 className="form-heading" >Sign In</h5>
                            <div className="orange-line"></div>
                        </div>
                        <div className="col-6 text-end">
                            <div className="otp-text">OTP</div>
                        </div>
                    </div>

                    <h4 className="text-center" style={{ marginTop: "50px" }}>Login</h4>

                    <form>
                        <div className="mb-3">

                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder=" phone number"
                                required
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button className='btn mt-4' style={{ backgroundColor: "orange", color: "white" }}>
                                Sign In <i className="fa-solid fa-arrow-right-long ms-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </>
    )
}

export default SignPage