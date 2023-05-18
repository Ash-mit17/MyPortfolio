import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <>
            <nav className="navbar">
                <Link className="navs" to="/">Home</Link>
            </nav>
            <div className="home" id="home">
                <div className="homeContent">
                    <h1 style={{"display": "inlineFlex","padding": "50px 0","fontSize": "5.6rem","fontWeight": "700","lineHeight": "1.3rem"}}>About Me</h1>
                    <p className='aboutfontp'>Currently a<span>Sophomore</span> in SJCE Mysore</p>
                    <p className='aboutfontp'>Pursuing BE in <span>Computer Science And Buisness Systems</span></p>
                    <p className='aboutfontp'>Currently learning <span>Solidity(Smart Contracts and DApps)</span> and working on <span>MERN stack</span>  projects</p>
                    <p className='aboutfontp'>Looking for internships to enchance my skills and gain practical knowledge</p>
                    <p></p>
                </div>
                <div className="image">
                    <img src="images/my-img.png" alt="dp" style={{"objectFit": "contain"}} />
                </div>
            </div>
        </>
    )
}
