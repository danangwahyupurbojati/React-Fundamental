import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/react-component">React Components</Link>
            </li>
            <li>
                <Link to="/jsx">JSX</Link>
            </li>
            <li>
                <Link to="/state-props">State and Props</Link>
            </li>
            <li>
                <Link to="/basic-hooks">Basic Hooks</Link>
            </li>
            <li>
                <Link to="/event-handling-1">onClick Event</Link>
            </li>
            <li>
                <Link to="/event-handling-2">onChange Event</Link>
            </li>
            <li>
                <Link to="/lifecycle-function">Functional LifeCycle</Link>
            </li>
            <li>
                <Link to="/lifecycle-class">Class LifeCycle</Link>
            </li>
            <li>
                <Link to="/styling-page">StylingPage</Link>
            </li>
            <li>
                <Link to="/form-handling">Form Handling</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home