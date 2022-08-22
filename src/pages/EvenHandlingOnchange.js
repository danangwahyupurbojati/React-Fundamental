import React from 'react'

const EvenHandlingOnchange = () => {
    const handleChange = (event) => {
        console.log('handle onchange', event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('form submitted');
    }

    return (
        <div>
            <h3>handling OnChange</h3>
            
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type='submit'>
                    submit
                </button>
            </form>
        </div>
    )
}

export default EvenHandlingOnchange