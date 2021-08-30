// import { Button } from 'bootstrap'
import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import NavBar from '../../navbar/navbar'
import './styles/assignmentOpened.css'

export default function AssignmentOpened(data) {
    var temp=""
    if(window.AssignmentGraded_Status=="No"){temp="This assignment is not graded"}
    else{temp="This assignment is graded"}
    return(
        <div>
            <div className="Assignment_Heading AH">
                <h1><b>Assignment :</b></h1>
            </div>
            <div className="bgAssignment">
                <div style={{paddingTop:"70px"},{marginLeft:"40px"},{paddingLeft:"10%"}}>
                    <h1 style={{paddingTop:"20px"}}><b>{window.AssignmentTopic} {"\n"}</b></h1>
                    <p style={{marginBottom:"0px"}}><b>Subject : {window.AssignmentSubject} {"\n"}</b></p>
                    <p style={{marginBottom:"0px"}}><b>{temp} {"\n"}</b></p>
                    <p style={{marginBottom:"10px"}}><b>Due Date: {window.AssignmentDue_Date} {"\n"}</b></p>
                    <h5 style={{marginBottom:"20px"}}>{window.AssignmentPS}</h5>
                    <Button style={{marginBottom:"20px", marginRight:"12px", backgroundColor:"black", border:"none"}} variant="dark">Upload</Button>
                    <Button style={{marginBottom:"20px", marginLeft:"2px", backgroundColor:"black", border:"none"}} variant="dark">Submit</Button>
                    <div style={{height:"20px"}}></div>
                </div>
            </div>
        </div>
    )
}
