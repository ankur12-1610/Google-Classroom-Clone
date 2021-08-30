import React from 'react'
import Task from './task/Task.js'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import AssignmentOpened from '../assignmentOpened/AssignmentOpened.js';
import NavBar from '../../navbar/navbar.js';



export default function Body() {
    return (
        <div>
            {window.Assignments.map(function(name, index){
                    return <Task data={window.Assignments[index]}/>
            })}
        </div>
    )
}
