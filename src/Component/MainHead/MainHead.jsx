import './mainHead.scss'
import React from 'react'
import { CartState } from '../../Context/Context'

const MainHead = ({h4,h1}) => {
    const {darkMode}=CartState()
    return (
        <div className= {darkMode ? 'MainHead Dark' : 'MainHead'}>
            <h4>{h4}</h4>
            <h1>{h1}</h1>
        </div>
    )
}

export default MainHead
