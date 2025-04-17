import React from "react";
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">

                    {/* Left - Circle and Search Icon */}
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
                                    width: "60px",  // Inner circle size
                                    height: "60px",  // Inner circle size
                                    borderRadius: "50%", // Perfect circle
                                    backgroundColor: "grey", // Inner circle color
                                }}
                            ></div>
                        </div>

                        {/* Search Icon */}
                        <FaSearch size={18} style={{ color: "#000", cursor: "pointer", marginLeft: "10px" }} />
                    </div>

                    {/* Center - Menu Links with Dividers */}
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer", marginLeft: "30px", color: "red" }}>
                        HOME
                    </span>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                        ABOUT US
                    </span>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                        Projects
                    </span>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                        NEW RELEASE
                    </span>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                        CONTACT US
                    </span>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>
                        BLOG
                    </span>
                </div>

                {/* Right - Icons with Dividers */}
                <div className="d-flex align-items-center">
                    <div style={{ color: "#000", cursor: "pointer" }}>
                        <FaUser />
                    </div>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <div style={{ color: "#000", cursor: "pointer" }}>
                        <FaShoppingCart />
                    </div>
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "black",
                            margin: "0 15px",
                        }}
                    ></div>
                    <div style={{ color: "#000", cursor: "pointer" }}>
                        <FaHeart />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
