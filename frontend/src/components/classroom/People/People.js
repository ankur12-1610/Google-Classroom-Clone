import React from 'react'
import './styles/People.css'

export default function People(props) {
    return (
        <div className="PeopleDiv">
            <div className="PeopleDivColor"></div>
            <div><h3 style={{paddingLeft:"10px"}}>{props.data}</h3></div>
        </div>
    )
}
