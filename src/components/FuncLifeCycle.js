import React, { useEffect, useState } from 'react'

const FuncLifeCycle = () => {
    const [update, setUpdate] = useState(false)

    const handleUpdate = () => {
        setUpdate(!update);
    }

    useEffect(() => {
      console.log('func component did mount')
    }, [])

    useEffect(() => {
      console.log('func component did update')
    }, [update])

    useEffect(() => {    
      return () => {
        console.log('func component will unmount')
      }
    }, [])
    
    
    return (
        <div>
            <h3>Func life Cycle</h3>

            {console.log('func from ui')}

            <button onClick={handleUpdate}>
                Update
            </button>

        </div>
    )
}

export default FuncLifeCycle