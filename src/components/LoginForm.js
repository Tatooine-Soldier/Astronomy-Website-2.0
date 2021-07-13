import {React, useState} from 'react'
import Username from "./Username.js"

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username);
        <Username username={username}/>
    }

    return (
        <div className="login-container">
            <form>
                <div className="input-containers">
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" placeholder="Username.." value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="input-containers">
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="text" placeholder="Password.." value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="login-submit">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}
