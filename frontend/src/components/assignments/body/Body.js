import React from 'react'
import Task from './task/Task.js'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import AssignmentOpened from '../assignmentOpened/AssignmentOpened.js';
import NavBar from '../../navbar/navbar.js';

window.Assignments=[
    {
        "Topic":"Sample 1",
        "Subject":"ME120",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No",
        "PS":"Sample Problem Statement"
    }
]

export default function Body() {
    return (
        <div>
            {window.Assignments.map(function(name, index){
                    return <Task data={window.Assignments[index]}/>
            })}
        </div>
    )
}
