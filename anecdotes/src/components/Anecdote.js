import React from 'react'
import { withRouter } from 'react-router-dom'

const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <h3>{anecdote.content} by {anecdote.author} </h3> 
            has {anecdote.votes} votes.
            <br />
        </div>
    )
}

export default withRouter(Anecdote)
