import React from 'react'
import Button from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/LandingPage.css"

export default function LandingPage() {
    return (
        <div class="bg">
            <div></div>
            <div class="Heading">
                <h1 class="LandingPageHeadingText text">Webdev Rookies</h1><br></br>
                <p class="LandingPageSubText text">A site to manage all your classes and assignments</p>
            </div>
            <div>
                <div class="SL">
                    <button className="SLButton text">Login</button>
                    <button className="SLButton text">Sign Up</button>
                </div>
            </div>
            
           
        </div>
    )
}
