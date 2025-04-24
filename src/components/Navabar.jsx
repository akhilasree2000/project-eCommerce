import React from "react";
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
            <div className="container-fluid">
                {/* Brand and toggle */}
                <div className="d-flex align-items-center">
                    {/* Outer black circle */}
                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            backgroundColor: "grey",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                        }}
                    >
                        {/* Inner grey circle */}
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                backgroundColor: "grey",
                            }}
                        ></div>
                    </div>

                    {/* Toggler Button */}
                    <button
                        className="navbar-toggler ms-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
                    {/* Left - Menu Links */}
                    <div className="navbar-nav d-flex flex-wrap align-items-center mt-3 mt-lg-0">
                        <FaSearch size={18} style={{ color: "#000", cursor: "pointer", marginRight: "15px" }} />
                        <Link to="/" className="nav-link fw-medium text-danger px-2">HOME</Link>
                        <span className="vr mx-2"></span>
                        <Link to="/about" className="nav-link fw-medium px-2">ABOUT US</Link>
                        <span className="vr mx-2"></span>
                        <Link to="/projects" className="nav-link fw-medium px-2">Projects</Link>
                        <span className="vr mx-2"></span>
                        <Link to="/release" className="nav-link fw-medium px-2">NEW RELEASE</Link>
                        <span className="vr mx-2"></span>
                        <Link to="/contact" className="nav-link fw-medium px-2">CONTACT US</Link>
                        <span className="vr mx-2"></span>
                        <Link to="/blog" className="nav-link fw-medium px-2">BLOG</Link>
                    </div>

                    {/* Right - Icons */}
                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        <FaUser style={{ color: "#000", cursor: "pointer" }} />
                        <span className="vr mx-3"></span>
                        <FaShoppingCart style={{ color: "#000", cursor: "pointer" }} />
                        <span className="vr mx-3"></span>
                        <FaHeart style={{ color: "#000", cursor: "pointer" }} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
