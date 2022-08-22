import React from 'react'
import './Card.css'

const Card = ({imageSource, title}) => {
  return (
    <div className="cardWrapper">
        <img className="cardImage" src={imageSource} alt={title} />
        <p className="cardText"> {title}</p>
    </div>
  )
}

export default Card