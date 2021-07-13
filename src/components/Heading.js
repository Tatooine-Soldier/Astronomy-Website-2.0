import React from 'react'
import LoginForm from "./LoginForm.js"
import Username from "./Username.js"

export default function Heading() {
    let counter = 0;

    function showForm() {
        console.log('yyy');
        let main = document.getElementById('main');
        let login = document.getElementById('login-hidden');
        if (counter % 2 === 0) {
            main.style.opacity = .4;
            login.style.display = "block";
        } else {
            main.style.opacity = 1;
            login.style.display = "none";
        } counter += 1;
    }

    return (
        <>
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
                        {/* FIX THIS */}
                        <Username/>   
                    </div>
                </nav>
            </div>
            <div className="login-hidden" id="login-hidden">
                <LoginForm/>
            </div>
        </>
    )
}
