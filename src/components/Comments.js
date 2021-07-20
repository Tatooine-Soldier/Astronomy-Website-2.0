import React from 'react'

export default function Comments(comment) {
    return (
        
            comments.map(comment => {return <Comment key={comment.id} comment={comment}/>})
        
    )
}
