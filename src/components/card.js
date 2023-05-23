import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'

export default function card(props) {
  return (
    <>
        <div className="grid-item1">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img
                                        style={{"height": "200px","width": "200px","borderRadius": "10px"}}
                                        src={props.imgsrc}
                                        alt="pg"
                                    />
                                    <p style={{"color": "lightseagreen"}}>More...</p>
                                </div>
                                <div className="back">
                                    <p style={{"wordWrap":"break-word"}}>{props.back}</p>
                                </div>
                            </div>
                        </div>
                        <p style={{"margin": "10px 0"}}>{props.title}</p>
                        <Button variant="contained" color='secondary' style={{"margin":"8px 0"}}><Link to={props.projectlink}><h3>Visit</h3></Link></Button>
                        <Button variant="contained" color='secondary'><Link to={props.githublink}><h3>ViewCode</h3></Link></Button>                      
                    </div>
    </>
  )
}
