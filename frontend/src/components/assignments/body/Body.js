import React from 'react'
import Task from './task/Task.js'

window.Assignments=[
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No"
    },
    {
        "Topic":"Sample 1",
        "Subject":"Physics",
        "Due_Date":"1",
        "Graded_Status":"No"
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
