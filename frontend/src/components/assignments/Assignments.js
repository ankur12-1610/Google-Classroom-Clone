import React from 'react'
import NavBar from '../navbar/navbar'
import Body from './body/Body'
import Heading from './heading/Heading'
import './styles/Assignments.css'

export default function Assignments() {
    return (
        <div>
            {/* <NavBar/> */}
            <div className="Assignments">
                
                <Heading/>
                <Body/>
            </div>
        </div>
        
    )
}
