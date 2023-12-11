import React, { useState } from "react";
import logo from '../../assets/icons/logo.png'
import { Link } from "react-router-dom";
import { Close, Menu } from "@mui/icons-material";
import './navbar.css'

export const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));

    return (
        <div className="nav">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
                <h2>Fitness Club</h2>
            </Link>
            <div className="toggle">
                {isNavOpen ? (
                    <Close onClick={() => setIsNavOpen(false)} />
                ) : (
                    <Menu
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsNavOpen(true);
                        }}
                    />
                )}
            </div>

            <div className={`links ${isNavOpen ? "show" : ""}`}>
                <Link to="/" className="tag">
                    Home
                </Link>
                <Link to="/" href="#exercises">
                    <a className="tag" href="#exercises">
                        Exercises
                    </a>
                </Link>

                <Link to="/bmi" className="tag">
                    BMI
                </Link>
            </div>
        </div>
    );
}
