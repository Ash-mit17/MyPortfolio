import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/card'

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
                    <div className="grid-item">Solidity <img src="images/solidity-icon.png" style={{"height": "20px", "width": "20px"}} alt="solidity" /></div>
                    {/* <!-- <div className="grid-item"></div>
                            <div className="grid-item"></div>   --> */}
                </div>
            </div>

            <div className="projects" id="projects">
                <h2 className="heading">My <span>Projects</span></h2>

                <div className="grid-container1">
                    <Card imgsrc="images/pg.png" title="PG Website" back="Created a website for a pg owner , team project , deployed on AWS" projectlink="https://www.srinimishambapg.in/" ></Card>
                    <Card imgsrc="images/ns.png" title="Task Manager" back="CRUD in mongo db" projectlink="https://task-manager-mhhh.onrender.com/" githublink="https://github.com/Ash-mit17/TaskManager-body"></Card>
                    <Card imgsrc="images/tictac.png" title="TIC TAC TOE" back="My First Project Used Dom" projectlink="https://ash-mit17.github.io/TIC-TAC-TOE/" githublink="https://github.com/Ash-mit17/TIC-TAC-TOE"></Card>
                    <Card imgsrc="images/foodCart.png" title="Food Cart" back="Used jwt context api useReducer Modals" projectlink="https://easyfood-yotx.onrender.com/" githublink="https://github.com/Ash-mit17/foodcart-frontend"></Card>
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
            <hr style={{"border":"0","height":"2px","backgroundImage":"linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))","margin":"30px 0"}} />
        </>
    )
}
