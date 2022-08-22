import React from 'react'

const PropComp = ({ data }) => {
    
  return (
    <div
        style={{
            border: '2px solid red'
        }}
    >
        <h3>Children</h3>
        <p>{data}</p>
    </div>
  )
}

export default PropComp