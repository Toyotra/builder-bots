  import React, { useState } from 'react'

  import { Link } from 'react-router-dom'

  function Navbar() {
      const [count, setCount] = useState(0)
    
      return (
          <div id="navbar">
            <div id="navLeft">
                <img src = "images/builderbots-logo.png" width="60px" className ="shaker"></img>
                
            </div>
            <h2 id ="title">BotBuilders Robotics Program</h2>
    
            <div id="spacer"></div>
            <Link to="/"><button className= "navButton">Home</button></Link>
            <Link to="/About"><button className= "navButton">About</button></Link>
            <a href = "https://forms.gle/3i5yjHrrjg6YyeETA" target="_blank" rel="noopener noreferrer"><button className= "navButton">Sign Up</button></a>
            <Link to="/FAQ"><button className= "navButton">FAQ</button></Link>
          </div>
      )
    }
    
    export default Navbar
    