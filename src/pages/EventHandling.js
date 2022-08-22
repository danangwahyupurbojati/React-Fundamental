import React from 'react'

const EventHandling = () => {
    const handleClick = () => {
        console.log('clicked . . . . .')
    }

    const handleWithParam = (name) => {
        console.log('clicked with param', name)
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click Me
        </button>

        <button onClick={() => handleWithParam('Toni adalah namaku')}>
            Click Me with parameter
        </button>
    </div>
  )
}

export default EventHandling