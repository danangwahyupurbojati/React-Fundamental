import React, { useState } from 'react'
import ClassLifeCycle from '../components/ClassLifeCycle'

const ClassLifeCyclePage = () => {
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
                    <ClassLifeCycle />
                )
            }
        </div>
    )
}

export default ClassLifeCyclePage