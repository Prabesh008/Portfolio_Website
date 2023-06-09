import React from 'react'
import "./Common.css"
import pic from "./pic2.png"
import { FontAwesomeIcon,faGitHub} from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter,faInstagram,} from '@fortawesome/free-brands-svg-icons'



const Body = () => {
  return (
    <section className='grid-container'>
        <div style={{color:"red"}}>
            <h2>Welcome!</h2>
            <h1 style={{color:"white"}}>I am a Web Developer</h1>
           <p style={{color:"white"}}>I am a web developer with 1 year experience in development. Frontend development is my forte<br/>
            but i am equally intrested in backend development. I primarily work with React, HTML, CSS and JS.<br/>
            I also have knowledge on backend technologies like Node.js, Express and MongoDB. 
           </p>
        </div>
        <div className='side-pic'>    
            <img src= {pic} alt="" width="400px" height="auto" />
        </div>
    <div>
    <a className='icon'><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#ffffff",}} /></a>
    <a className='icon'><FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#ffffff",}} /></a>
    <a className='icon'><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#fffafa",}} /></a>
    </div>
    </section>
  )
}

export default Body