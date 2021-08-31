import React, { useEffect } from "react";
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from './google.png'
import { Link } from "react-router-dom";
import {authorize, myaxios} from '../../connections'
import { useAlert } from 'react-alert'
// import LoginByGoogle from "../loginByGoogle/LoginByGoogle";
import GoogleLogin from "react-google-login";
import axios from 'axios'
export default function Signup({ setLoggedIn, role, setRole }) {
    const alert = useAlert()

    // function signup(res){
    // const googleresponse = {
    //     Name: res.profileObj.name,
    //     email: res.profileObj.email,
    //     token: res.googleId,
    //     Image: res.profileObj.imageUrl,
    //     ProviderId: 'Google'
    //   };
    //   debugger;
    //   axios.post('http://localhost:60600/Api/Login', googleresponse)
    //     .then((result) => {
    //       let responseJson = result;
    //       sessionStorage.setItem("userData", JSON.stringify(result));
    //     //   this.props.history.push('/Dashboard')
    //     });
    // };

    const responseGoogle =async (response) =>{

        function reverse(s){
            return s.split("").reverse().join("");
        }

        console.log(response);
        var res = response.profileObj;
        console.log(res["name"]);
        var email=res["email"].toString();
        var first_name=res["name"].toString();
        var password=res["googleId"]
        // var username=res["email"]
        var last_name=""
        for(var i=first_name.length;i>=0;i--){
            if(first_name[i]==' '){break;}
            else{
                last_name=last_name+first_name[i];
            }
        }
        last_name=last_name.substring(9,)
        last_name=reverse(last_name)
        first_name=first_name.substring(0,first_name.length-last_name.length)
        var username=first_name
        console.log(first_name)
        console.log(last_name)
        console.log(username);
        console.log(password);
        // debugger;
        // this.signup(response);

        const data = {
            first_name,
            last_name,
            email,
            password,
            username
        }
        
        const options = {
            method: 'post',
            url: 'auth/register/', 
            headers: {
              'Content-Type': 'application/json'
            },
            data
        }

        try {
                    const res = await myaxios(options)
                    authorize(res.data.token, setLoggedIn)
                    localStorage.setItem('token', res.data.token)
                    console.log(res)
                } catch(err) {
                    console.log(err)
                    console.log(err.response)
                    if(err.response.data.email[0] === "Email already exists!") {
                        alert.show("An account with this email already exists")
                    } else {
                        if(err.response.data.username[0] === "Username already exists!") {
                            alert.show("This User name is already taken!")
                        }
                    }
                }
      }

    const onSignup = async function(e) {
        e.preventDefault()
        const first_name = document.querySelector("#firstname").value
        const last_name = document.querySelector("#lastname").value
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const cpassword = document.querySelector("#cpassword").value
        const myrole = document.querySelector("#role").value
        const data = {
            first_name,
            last_name,
            email,
            password,
            username
        }
        
        const options = {
            method: 'post',
            url: 'auth/register/', 
            headers: {
              'Content-Type': 'application/json'
            },
            data
        }
        if(first_name && last_name && username && email && password && cpassword) {
            if(password == cpassword) {
                try {
                    const res = await myaxios(options)
                    authorize(res.data.token, setLoggedIn)
                    localStorage.setItem('token', res.data.token)
                    setRole(myrole)
                    console.log(res)
                } catch(err) {
                    console.log(err)
                    console.log(err.response)
                    if(err.response.data.email[0] === "Email already exists!") {
                        alert.show("An account with this email already exists")
                    } else {
                        if(err.response.data.username[0] === "Username already exists!") {
                            alert.show("This User name is already taken!")
                        }
                    }
                }

            } else {
                alert.show("Passwords do not match!!")
            }
        } else {
            alert.show("Please provide the required credentials")
        }        

    }

    return (
        <div className="containerdiv">
            <div className="formdiv">
                <Form id="#myform">
                    <div className="formheaders" style={{display:"flex", justifyContent:"center"}}>
                        <h2>SignUp</h2>
                    </div>
                    <FloatingLabel controlId="floatingSelect" label="Signup as:">
                        <Form.Select aria-label="Floating label select example" id="role">
                            <option value="student">student</option>
                            <option value="teacher">teacher</option>
                        </Form.Select>
                    </FloatingLabel>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" id="firstname" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" id="lastname" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" id="email" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>UserName: </Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" id="username" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" id="password" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password: </Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" id="cpassword" />
                    </Form.Group>
                    <br/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button onClick={onSignup}>
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
                        {/* <Button variant="primary"><img src={Google} height="20px" width="20px" style={{marginRight:"2px"}} onClick={() => LoginByGoogle()}/>Signup with Google</Button> */}
                        <GoogleLogin
                        clientId="949668683105-e5m4vgrqv9dffqlleeb0ponf41t0c1eo.apps.googleusercontent.com"
                        buttonText="Sign Up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} ></GoogleLogin>
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