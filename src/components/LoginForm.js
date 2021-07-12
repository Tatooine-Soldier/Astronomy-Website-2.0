import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <form>
                <div className="input-containers">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="Username.."/>
                </div>
                <div className="input-containers">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="text" placeholder="Password.."/>
                </div>
            </form>
        </div>
    )
}
