import React from "react";
import { Form, Button } from 'react-bootstrap'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from '.././signup/google.png'
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="containerdiv">
            <div className="formdiv">
                <Form>
                    <div className="formheaders" style={{display:"flex", justifyContent:"center"}}>
                        <h2>Sign in</h2>
                    </div>
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
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button type="submit">
                            Sign in
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
                        <Button variant="primary"><img src={Google} height="20px" width="20px" style={{marginRight:"2px"}}/>Sign in with Google</Button>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <Link to="/signup" style={{textDecoration:"none"}}>Do not have an account? Sign up</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}