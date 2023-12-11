import React from 'react'
import { Button, Typography } from '@mui/material'
import Hero from '../../assets/images/hero4.jpg'
import './style/HeroBanner.css'

export const HeroBanner = () => {
    return (
        <section className='heroBanner'>
            <div className="overlay">
                <div className="container">
                    <div className="design"></div>
                    <div className="content">
                        <h1 className="title">
                            complete <span style={{ color: "#1460e5" }}>daily workout</span>{" "}
                            Exercises
                        </h1>
                        <p style={{ color: "#1460e5" }}>
                            Sweat. <span style={{ color: "#fff" }}>Smile.</span> Repeat.
                        </p>
                        <p className="description">
                            Checkout the most effective exercises.
                        </p>
                        <a href='#exercises'>
                            <button>
                                Explore Exercises
                            </button>
                        </a>

                    </div>
                    <div className="image">
                        <img src={Hero} alt="hero.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}
