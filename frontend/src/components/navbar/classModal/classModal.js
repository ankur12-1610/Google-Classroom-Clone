import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {myaxios} from '../../../connections'
import Validator from 'validator'
import {useAlert} from 'react-alert'

function MyVerticallyCenteredModal(props) {
    const alert = useAlert()
    // const [created, setCreated] = useState(false)
    const onCreate = async function(e) {
        // e.preventDefault()
        const title = document.querySelector("#title").value
        const mlink = document.querySelector("#mlink").value
        const theme = document.querySelector("#theme").value
        const data = {
            "title": title,
            "classroom_color": theme 
        }
        console.log(title, mlink, theme)
        if(title && mlink && theme) {
            if(Validator.isURL(mlink)){
                try{
                    const res = await myaxios({
                        method: "POST",
                        url: "/classroom/",
                        data
                    })
                    // setCreated(true)
                    console.log(res)
                    props.onHide()
                } catch(err) {
                    console.log(err.response)
                }
            } else {
                alert.show("Please enter a valid google meet link")
            }
        }

        // e.preventDefault()
    }


    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter" style={{textAlign:"center", width:"100%", fontSize:"25px"}}>
                Add Class
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontWeight:"normal", fontSize:"20px"}}>
            <Form id="myform">
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Subject Name" required id="title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Meet Link:</Form.Label>
                    <Form.Control type="url" placeholder="https://meet.google.com/xxx-xxx-xxx" required id="mlink"/>
                </Form.Group>
                <FloatingLabel controlId="floatingSelect" label="Select Classroom theme:">
                    <Form.Select aria-label="Floating label select example" id="theme">
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                    </Form.Select>
                </FloatingLabel>
                <br/>
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button variant="primary" style={{marginRight:"5px"}} onClick={onCreate} type="submit"> Create</Button>
                    <Button onClick={props.onHide} variant="danger" style={{marginLeft:"5px"}}>Cancel</Button>
                </div>
            </Form>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="primary" onClick={onCreate}> Create</Button>
            <Button onClick={props.onHide} variant="danger">Cancel</Button>
        </Modal.Footer> */}
        </Modal>
    );
  }
  
export default function ClassModal() {
    const [modalShow, setModalShow] = React.useState(false);
    // const [created, setCreated] = useState(false)
    // useEffect(() => {

    // },[created])
  
    return (
      <>
        <Button variant="outline-dark" style={{marginRight:"30px"}} onClick={() => setModalShow(true)}>
          Add Class
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }