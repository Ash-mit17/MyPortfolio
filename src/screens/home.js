import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Index() {
    return (
        <>
            <header class="header">
                <Link to="" class="logo">Ashmit</Link>

                <div className="bx bx-menu" id="menu-icon"></div>

                <nav className="navbar" >
                    <a className="navs" href="#home">Home</a>
                    <a className="navs" href="#skills">Skills</a>
                    <Link className="navs" to="/about">About</Link>
                    <a className="navs" href="#projects">Projects</a>
                    <Link to="/resume">Resume</Link>
                    <a className="navs" href="#contact">Contact</a>
                </nav>
            </header>

            <div className="home" id="home">
                <div className="home-content">
                    <h1 style={{"display": "inlineFlex"}}>Hi,I'm <span>Ashmit Ranjan </span></h1>
                    <div className="text-animate">
                        <h3>MERN Stack Developer</h3>
                    </div>
                    <p>I am a Web 3 enthusiast.</p>
                    <p>I love to learn new techs and to implement them with crazy ideas.</p>
                    <p>DSA in Java. Solved 110+ qns on Leetcode</p>
                </div>
                <div className="image">
                    <img src="images/my-img.png" alt="dp" style={{"object-fit": "contain"}} />
                </div>
            </div>

            <div className="skills" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>

                <div className="grid-container">
                    <div className="grid-item">JAVA<i className="bx bxl-java"></i></div>
                    <div className="grid-item">C</div>
                    <div className="grid-item">Html<i className="bx bxl-html5"></i></div>
                    <div className="grid-item">Css<i className="bx bxl-css3"></i></div>
                    <div className="grid-item">JavaScript<i className="bx bxl-javascript"></i></div>
                    <div className="grid-item">Node Js<i className="bx bxl-nodejs"></i></div>
                    <div className="grid-item">MongoDb<i className="bx bxl-mongodb"></i></div>
                    <div className="grid-item">ReactJs<i className="bx bxl-react"></i></div>
                    {/* <!-- <div className="grid-item"></div>
                            <div className="grid-item"></div>   --> */}
                </div>
            </div>

            <div className="projects" id="projects">
                <h2 className="heading">My <span>Projects</span></h2>

                <div className="grid-container1">
                    <div className="grid-item1">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img
                                        style={{"height": "200px", "width": "200px"}}
                                        src="images/pg.png"
                                        alt="pg"
                                    />
                                    <p style={{"color": "lightseagreen"}}>More...</p>
                                </div>
                                <div className="back">
                                    <p>Created for a pg owner</p>
                                    <p>Tech used <span>MERN</span></p>
                                    <p>Frontend on <span>Aws amplify</span> Backend on <span>Aws EC2</span></p>
                                </div>
                            </div>
                        </div>
                        <p style={{"margin": "10px 0"}}>PG Website</p>
                        <Button variant="contained" color='secondary'><Link to="https://www.srinimishambapg.in/"><h3>Visit</h3></Link></Button>
                    </div>
                    <div className="grid-item1">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img
                                        style={{"height": "200px", "width": "200px"}}
                                        src="images/ns.png"
                                        alt="pg"
                                    />
                                    <p style={{"color": "lightseagreen"}}>More...</p>
                                </div>
                                <div className="back">
                                    <p>Tech Used <span>MERN</span></p>
                                    <p>Simple application of <span>CRUD</span></p>
                                </div>
                            </div>
                        </div>
                        <p style={{"margin": "10px 0"}}>Task Manager</p>
                        <Button variant="contained" color='secondary' style={{"margin":"8px 0"}}><Link to="https://task-manager-mhhh.onrender.com"><h3>Visit</h3></Link></Button>
                        <Button variant="contained" color='secondary'><Link to="https://github.com/Ash-mit17/TaskManager-body"><h3>ViewCode</h3></Link></Button>
                    </div>
                    <div className="grid-item1">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img
                                        style={{"height": "200px","width": "200px"}}
                                        src="images/tictac.png"
                                        alt="pg"
                                    />
                                    <p style={{"color": "lightseagreen"}}>More...</p>
                                </div>
                                <div className="back">
                                    <p>My first project</p>
                                    <p>Used <span>DOM</span></p>
                                </div>
                            </div>
                        </div>
                        <p style={{"margin": "10px 0"}}>TicTacToe</p>
                        <Button variant="contained" color='secondary' style={{"margin":"8px 0"}}><Link to="https://ash-mit17.github.io/TIC-TAC-TOE/"><h3>Visit</h3></Link></Button>
                        <Button variant="contained" color='secondary'><Link to="https://github.com/Ash-mit17/TIC-TAC-TOE"><h3>ViewCode</h3></Link></Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="linkbox" id="contact">
                <h3 className="heading1">Get in touch</h3>
                <div className="links">
                    <Link to="https://www.linkedin.com/in/ashmit-ranjan-625055225/"
                    ><i className="bx bxl-linkedin"></i
                    ></Link>
                    <Link to="https://twitter.com/RanjanAshmit/"
                    ><i className="bx bxl-twitter"></i
                    ></Link>
                    <Link to="https://github.com/Ash-mit17"><i className="bx bxl-github"></i></Link>
                </div>
            </div>
        </>
    )
}
