import React from 'react'
import Task from './task/Task.js'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import AssignmentOpened from '../assignmentOpened/AssignmentOpened.js';
import NavBar from '../../navbar/navbar.js';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

export default function Body(props) {
    useEffect(() => {
        // window.location.reload()
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    const d=JSON.parse(localStorage.Assignments)
    // console.log(props.data);
    return (
        <>
        <div style={{marginLeft:"6%",marginBottom:"15px"}}>
            <Button variant="outline-info" style={{color:"black"}}>Create Assignment</Button>
        </div>
        <div>
            {d.map(function(name, index){
                // localStorage.temp=JSON.stringify(d[index])
                    return <Task data={d[index]}/>
            })}
        </div>
        </>
    )
}
