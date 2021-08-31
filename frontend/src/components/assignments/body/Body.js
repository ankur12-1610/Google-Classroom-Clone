import React from 'react'
import Task from './task/Task.js'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import AssignmentOpened from '../assignmentOpened/AssignmentOpened.js';
import NavBar from '../../navbar/navbar.js';
import { Button, Modal, Form } from 'react-bootstrap';
import { myaxios } from '../../../connections.js';
import Validator from 'validator'
import {useAlert} from 'react-alert'

function MyVerticallyCenteredModal(props) {
    const alert = useAlert()
    const getClassId = async () => {
        try {
            const res = await myaxios({
                method:"GET",
                url:"/assignments/"
            })
            console.log(res)
            // console.log(res.data[0].id)
            return res.data[0].classroom_id
        } catch(err) {
            console.log(err, err.response)
            return null
        }
    }
    const onCreateAssignment = async (e) => {
        e.preventDefault()
        const cid = await getClassId()
        const title = document.querySelector("#title").value
        const classroom = cid
        const deadline = document.querySelector("#deadline").value.replace("/","-")
        const assignment_link = document.querySelector("#alink").value
        console.log(classroom)
        if(title && deadline && assignment_link) {
            if(Validator.isURL(assignment_link)) {
                try {
                    const res = await myaxios({
                        method: "POST",
                        url: "/assignments/",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        data: {
                            title,
                            classroom,
                            deadline,
                            assignment_link
                        }
                    })
                    console.log(res)
                    props.onHide()
                } catch(err) {
                    console.log(err)
                    console.log(err.response)
                }
            } else {
                alert.show("Please enter a valid link")
            }

        } else {
            alert.show("Please enter all the credentials")
        }
       
    }



    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter" style={{textAlign:"center", width:"100%", fontSize:"25px"}}>
                Create Assignment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontWeight:"normal", fontSize:"20px"}}>
            <Form id="myform">
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Assignment Title" required id="title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Deadline:</Form.Label>
                    <Form.Control type="date" placeholder="Assignment Deadline" required id="deadline"/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Assignment Link:</Form.Label>
                    <Form.Control type="url" placeholder="Assignment Link" required id="alink"/>
                </Form.Group>
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="primary" style={{marginRight:"5px"}} type="submit" onClick={onCreateAssignment}> Submit</Button>
                    <Button onClick={props.onHide} variant="danger" style={{marginLeft:"5px"}}>Cancel</Button>
                </div>
            </Form>
        </Modal.Body>
      </Modal>
    );
}




export default function Body() {
    const d=JSON.parse(localStorage.Assignments)
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div style={{marginLeft:"6%",marginBottom:"15px"}}>
                <Button variant="outline-info" style={{color:"black"}} onClick={() => setModalShow(true)}>Create Assignment</Button>
            </div>
            <div>
                {d.map(function(name, index){
                        return <Task data={d[index]}/>
                })}
            </div>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </>
    )
}
