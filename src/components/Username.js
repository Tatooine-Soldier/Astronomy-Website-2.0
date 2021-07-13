import React from 'react'

export default function Username(username) {
    function showName() {
        console.log(username)
    }
    return (
        <div>
            {showName}

        </div>
    )
}
