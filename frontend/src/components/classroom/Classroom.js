import React from 'react'
import { Tabs,Tab,Button } from 'react-bootstrap'
import Assignments from '../assignments/Assignments'
import './styles/Classroom.css'
import Body from '../assignments/body/Body'
import People from './People/People'

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

window.TeacherList=[
    "Teacher 1",
    "Teacher 3",
    "Teacher 2"
]

window.StudentList=[
    "Student 1",
    "Student 3",
    "Student 2"
]

export default function Classroom() {
    console.log(window.ClassroomTitle)
    return (
        <div>
            <div className="ClassroomHolder"> 
                <div className="ClassroomHeading">
                    <h1 style={{marginBottom:"0px"}}>{window.ClassroomTitle}{"\n"}</h1>
                    <h3>{window.ClassroomTeacher}</h3>
                </div>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Assignments">
                    
                    <Body/>
                </Tab>
                <Tab eventKey="profile" title="People">
                    <h2 style={{marginLeft:"3%"}}>Teacher</h2>
                    {window.TeacherList.map(function(name, index){
                        return <People data={window.TeacherList[index]}/>
                    })}
                    <h2 style={{marginLeft:"3%"}}>Students</h2>
                    {window.StudentList.map(function(name, index){
                        return <People data={window.StudentList[index]}/>
                    })}
                    <div style={{height:"10px"}}></div>
                </Tab>
                </Tabs>
            </div>
        </div>
    )
}
