import React from 'react'
import LoginForm from "./LoginForm.js"

export default function Heading() {
    function showForm() {
        return <LoginForm/>
    }

    return (
        <div className="top-heading">
            <div id="heading-container">
                <b>AstroWorld</b>
            </div>
            <nav>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <div className="nav-buttons">
                    <button onClick={showForm}>Log in</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}
