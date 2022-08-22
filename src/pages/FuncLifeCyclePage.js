import React, { useState } from 'react'
import FuncLifeCycle from '../components/FuncLifeCycle'

const FuncLifeCyclePage = () => {
    const [hideComp, setHideComp] = useState(false)

    const handleHideComp = () => {
        setHideComp(!hideComp)
    }

    return (
        <div>
            <button onClick={handleHideComp}>
                Toggle Component
            </button>

            {
                hideComp && (
                    <FuncLifeCycle />
                )
            }
        </div>
    )
}

export default FuncLifeCyclePage