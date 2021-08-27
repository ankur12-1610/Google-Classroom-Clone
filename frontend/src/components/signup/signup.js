import React from "react";
import { Form, Button } from 'react-bootstrap'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from './google.png'
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div className="containerdiv">
            <div className="formdiv">
                <Form>
                    <div className="formheaders" style={{display:"flex", justifyContent:"center"}}>
                        <h2>SignUp</h2>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter UserName" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>UserName: </Form.Label>
                        <Form.Control type="text" placeholder="Enter UserName" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password: </Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <br/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button type="submit">
                            Sign Up
                        </Button>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div style={{width:"200px", display:"flex", alignItems:"center", justifyContent:"center", marginRight:"5px"}}>
                            <div style={{borderBottom:"1px solid black", width:"100%"}}>
                            </div>
                        </div>
                        <h3>OR</h3>
                        <div style={{width:"200px", display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"5px"}}>
                            <div style={{borderBottom:"1px solid black", width:"100%"}}>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button variant="primary"><img src={Google} height="20px" width="20px" style={{marginRight:"2px"}}/>Signup with Google</Button>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <Link to="/login" style={{textDecoration:"none"}}>Already have an account? Login In</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}