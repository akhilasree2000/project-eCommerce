import React from 'react'
import BookIcon from '../assets/bookIcon.png'
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <>

            <div style={{ backgroundColor: "#ED553B", height: "500px"}}>

                <div>
                    <div className="row">
                        <div className="col">
                            <div style={{ marginLeft: "150px", color: "white" }}>
                                <img
                                    className="img-fluid"
                                    style={{ width: "80px", marginTop: "100px" }}
                                    src={BookIcon}
                                    alt=""
                                />
                                <p>
                                    Nostrud exercitation ullamco laboris nisi ut <br />
                                    aliquip ex ea commodo consequat.
                                </p>

                                {/* Social Icons */}
                                <div style={{ display: 'flex', gap: '25px', marginTop: '20px' }}>
                                    {[faFacebookF, faLinkedinIn, faTwitter, faYoutube].map((icon, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={icon} style={{ color: 'red' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "100px", marginLeft: "400px", color: "white", fontSize: "20px" }} className="col">
                            COMPANY
                            <div style={{ fontSize: "15px", margin: "10px", lineHeight: "30px" }}>
                                <div>HOME</div>
                                <div>ABOUT US</div>
                                <div>BOOKS</div>
                                <div>NEW RELEASE</div>
                                <div>CONTACT US</div>
                                <div>BLOG</div>
                            </div>
                        </div>
                        <div style={{ marginTop: "100px", marginLeft: "100px", color: "white", fontSize: "20px" }} className="col">
                            IMPORTENT LINKS
                            <div style={{ fontSize: "15px", margin: "10px", lineHeight: "30px" }}>
                                <div>Privacy Policy</div>
                                <div>FAQS</div>
                                <div>Terms of Service</div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className='container' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 20px',
                    marginTop: "40px",
                    fontSize: '14px',
                    color: 'white',
                    marginLeft: "140px"
                }}>
                    <div>
                        © 2022 Arihant. All Rights Reserved.
                    </div>
                    <div>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 5px', fontSize: "20px" }}>Privacy</a> |
                        <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 5px', fontSize: "20px" }}>Terms of Service</a>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer