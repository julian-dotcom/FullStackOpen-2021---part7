import React from 'react'

const Notification = ({ notification }) => {
    return (
        <div>
          {notification === '' ? ''
          : `a new anecdote "${notification}" has been created`
        }
        </div>
    )
}

export default Notification
