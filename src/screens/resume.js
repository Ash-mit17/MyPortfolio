import React from 'react'
import {Link} from 'react-router-dom'

export default function Resume() {
    return (
        <>
            <nav class="navbar">
                <Link class="navs" to="/">Home</Link>
            </nav>
            <center>
                <h1 style={{ "color": "green" }}>My Resume</h1>
                <embed src="Ashmit's Resume (2).pdf" width="70%"
                    height="600px" />
            </center>
        </>
    )
}
