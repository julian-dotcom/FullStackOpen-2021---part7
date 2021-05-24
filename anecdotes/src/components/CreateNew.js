import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom';
import { useField } from '../hooks/hooks'

const CreateNew = ({ addNew, setNotification }) => {

    const content = useField('text')
    const author = useField('text')
    const info = useField('text')

    const history = useHistory()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      setNotification(content.value)
      setTimeout(() => {
        setNotification('')
      }, 10000)
      history.push('/')
    }

    const resetForm = () => {
      content.reset()
      author.reset()
      info.reset()
    }
  
    return (
      <div>
          <h2>create a new anecdote</h2>
          <form onSubmit={handleSubmit}>
            <div>
              content
              <input name='content' {...content} reset='' />
            </div>
            <div>
              author
              <input name='author' {...author} reset='' />
            </div>
            <div>
              url for more info
              <input name='info' {...info} reset='' />
            </div>
            <button type='submit'>create</button>
            <button type='reset' onClick={resetForm}>reset</button>
          </form>
      </div>
    )
  
  }

export default CreateNew
