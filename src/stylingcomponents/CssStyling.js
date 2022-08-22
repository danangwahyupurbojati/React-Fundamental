import React from 'react'
import './CssStyling.css';

const CssStyling = () => {
  return (
    <div>
        <div className='boxSample'>
            <h3>div with css classname</h3>
        </div>

        <div style={{ border: '1px solid blue', width: '300px'}}>
            <h3>inline css</h3>
        </div>
    </div>
  )
}

export default CssStyling