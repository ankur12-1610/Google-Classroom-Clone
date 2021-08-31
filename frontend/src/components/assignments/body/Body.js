import React from 'react'
import Task from './task/Task.js'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import AssignmentOpened from '../assignmentOpened/AssignmentOpened.js';
import NavBar from '../../navbar/navbar.js';
import { Button } from 'react-bootstrap';


export default function Body() {
    const d=JSON.parse(localStorage.Assignments)
    return (
        <>
        <div style={{marginLeft:"6%",marginBottom:"15px"}}>
            <Button variant="outline-info" style={{color:"black"}}>Create Assignment</Button>
        </div>
        <div>
            {d.map(function(name, index){
                    return <Task data={d[index]}/>
            })}
        </div>
        </>
    )
}
