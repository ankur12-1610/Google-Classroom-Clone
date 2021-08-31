// import { Button } from 'bootstrap'
import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import NavBar from '../../navbar/navbar'
import './styles/assignmentOpened.css'
import Iframe from 'react-iframe'
import { myaxios } from '../../../connections'


function MyVerticallyCenteredModal(props) {
    const onSubmit = async (e) => {
        e.preventDefault()
        const alink = document.querySelector("#alink").value
        try {
            const res = await myaxios({
                method: "POST",
                url: "/assignment_submission/",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "submission_link": alink
                }
            })
            console.log(res)
            props.onHide()
        } catch(err) {
            console.log(err,err.response)
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
                Submit
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontWeight:"normal", fontSize:"20px"}}>
            <Form id="myform">
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Assignment Solution Link:</Form.Label>
                    <Form.Control type="url" placeholder="Upload your assignment in Google drive and provide the link" required id="alink"/>
                </Form.Group>
                <br/>
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="primary" style={{marginRight:"5px"}} type="submit" onClick={onSubmit}> Submit</Button>
                    <Button onClick={props.onHide} variant="danger" style={{marginLeft:"5px"}}>Cancel</Button>
                </div>
            </Form>
        </Modal.Body>
      </Modal>
    );
}




export default function AssignmentOpened(data) {
    // const [iframe, setIframe] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [alink, setAlink] = useState(null)
    var temp=""
    if(localStorage.AssignmentGraded_Status==="ungraded"){temp="This assignment is not graded"}
    else{temp="This assignment is graded"}
    const getAssignment = async () => {
        try {
            const res = await myaxios({
                method:"GET",
                url:"/assignments/"
            })
            console.log(res)
            setAlink(res.data[0].assignment_link)
            console.log(res.data[0].assignment_link)

        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAssignment()
    },[])

    function reverse(s){
        return s.split("").reverse().join("");
    }
    // const ddate = () => {
    //     let ddata1 = ""
    //     for(let c in localStorage.AssignmentDue_Date) {
    //         if(c == "T") {
    //             break;
    //         } else {
    //             console.log(c)
    //             ddate = ddate + c
    //         }
    //     }
    //     return reverse(ddata1)
    // }
    // let dtime = (localStorage.AssignmentDue_Date - ddate)
    // dtime.replace("T", "")

    return(
        <div>
            <div className="Assignment_Heading AH">
                <h1><b>Assignment :</b></h1>
            </div>
            <div className="bgAssignment">
                <div style={{paddingTop:"70px"},{marginLeft:"40px"},{paddingLeft:"10%"}}>
                    <h1 style={{paddingTop:"20px"}}><b>{localStorage.AssignmentTopic} {"\n"}</b></h1>
                    <p style={{marginBottom:"0px"}}><b>Subject : {localStorage.AssignmentSubject} {"\n"}</b></p>
                    <p style={{marginBottom:"0px"}}><b>{temp} {"\n"}</b></p>
                    <p style={{marginBottom:"10px"}}><b>Due Date : {localStorage.AssignmentDue_Date.replace("T", " before ")} {"\n"}</b></p>
                    <h5 style={{marginBottom:"20px"}}>{localStorage.AssignmentPS}</h5>
                    <Button style={{marginBottom:"20px", marginRight:"12px", backgroundColor:"black", border:"none"}} variant="dark" href={alink} target="_parent">View Assignment</Button>
                    <Button style={{marginBottom:"20px", marginLeft:"2px", backgroundColor:"black", border:"none"}} variant="dark" onClick={() => setModalShow(true)}>Submit</Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div style={{height:"20px"}}></div>
                </div>
            </div>
        </div>
    )
}
