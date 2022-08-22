import React from 'react'
import ClassComponents from '../components/ClassComponents'
import FuncComponents from '../components/FuncComponents'

const ReactComponent = () => {
    return (
        <div>
            {/* functional Component */}
            <FuncComponents />

            {/* Class Component */}
            <ClassComponents />
        </div>
    )
}

export default ReactComponent