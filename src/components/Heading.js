import React from 'react'
import LoginForm from "./LoginForm.js"
import Username from "./Username.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Heading() {
    let counter = 0;
    let menuCounter = 0;

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

    function showMenu() {
        let menu = document.getElementById('menu');
        if (menuCounter % 2 === 0) {
            menu.style.display = "block";
            
        } else {
            menu.style.display = "none";
        } menuCounter++;
        
    }

    return (
        <>
            <div className="top-heading">
                <div id="heading-container">
                    <b>AstroWorld</b>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/"><a href="#">HOME</a></Link></li>
                        <div className="dropdown">
                            <li><a href="#" onClick={showMenu}>ABOUT</a></li>
                                <ul className="dropdown-content" id="menu">
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">NASA</a></li>
                                    <li><a href="#">SpaceX</a></li>
                                </ul>
                        </div>
                        <li><Link to="/contact"><a href="#">CONTACT</a></Link></li>
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
  