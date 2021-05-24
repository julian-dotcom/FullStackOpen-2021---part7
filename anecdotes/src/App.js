import React, { useState } from 'react'
import About from './components/About'
import Anecdote from './components/Anecdote'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import Menu from './components/Menu'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch, Route, Link,
  useRouteMatch,
  Redirect
} from "react-router-dom"
import Notification from './components/Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  
  const match = useRouteMatch('/anecdotes/:id')
  const anecdote = match ? anecdotes.find(a => Number(a.id) === Number(match.params.id)) : null

  return (
    <div>
      <div>
        <Link to='/'>anecdotes</Link><span> </span>
        <Link to='/create'>create new</Link><span> </span> 
        <Link to='/about'>about</Link>
      </div>

      <Switch>
        <Route path="/anecdotes/:id">
          <Anecdote anecdote={anecdote} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/create'>
         <CreateNew addNew={addNew} setNotification={setNotification} />
        
        </Route>
        <Route path='/'>
          <Notification notification={notification} />
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>

      <div>
        <Footer />
      </div>

    </div>

  )
}

export default App;