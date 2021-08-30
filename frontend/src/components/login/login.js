import React from "react";
import { Form, Button } from 'react-bootstrap'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from '.././signup/google.png'
import { Link } from "react-router-dom";
import { myaxios, authorize } from '../../connections'
import { useAlert } from 'react-alert'
import GoogleLogin from "react-google-login";
export default function Login({ setLoggedIn }) {
    const alert = useAlert()

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
        // var username=res["name"]
        var last_name=""
        for(var i=first_name.length;i>=0;i--){
            if(first_name[i]===' '){break;}
            else{
                last_name=last_name+first_name[i];
            }
        }
        last_name=last_name.substring(9,)
        last_name=reverse(last_name)
        first_name=first_name.substring(0,first_name.length-last_name.length)
        if(first_name===''){first_name=last_name; last_name=""}
        var username=first_name
        console.log(first_name)
        console.log(last_name)
        console.log(username);
        console.log(password);
        // debugger;
        // this.signup(response);
        var data = {
            username,
            password
        }

        var options = {
            method: 'post',
            url: 'auth/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        }
       
        // if(username && password) {
            try {
                const res = await myaxios(options)
                authorize(res.data.token, setLoggedIn)
                localStorage.setItem('token', res.data.token)
                console.log(res)
            } catch(err) {
            data = {
                first_name,
                last_name,
                email,
                password,
                username
            }
            options = {
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

    }


    const onLogin = async function(e) {
        e.preventDefault()
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const rememberme = document.querySelector("#rememberme").checked
        console.log(rememberme)
        const data = {
            username,
            password
        }

        const options = {
            method: 'post',
            url: 'auth/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        }

        console.log(data)

        if(username && password) {
            try {
                const res = await myaxios(options)
                authorize(res.data.token, setLoggedIn)
                if(rememberme) {
                    localStorage.setItem('token', res.data.token)
                }
                console.log(res)
            } catch(err) {
                console.log(err)
                console.log(err.response)
                if(err.response.data.non_field_errors[0] === "Invalid Credentials!") {
                    alert.show("Account does not exists!")
                }
            }
        } else {
            alert.show("Please enter the required credentials")
        }
    }

    return (
        <div className="containerdiv">
            <div className="formdiv">
                <Form>
                    <div className="formheaders" style={{display:"flex", justifyContent:"center"}}>
                        <h2>Sign in</h2>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>UserName: </Form.Label>
                        <Form.Control type="text" placeholder="Enter UserName" id="username" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Password" id="password" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" id="rememberme" />
                    </Form.Group>
                    <br/>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Button onClick={onLogin}>
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
                        {/* <Button variant="primary"><img src={Google} height="20px" width="20px" style={{marginRight:"2px"}}/>Sign in with Google</Button> */}
                        <GoogleLogin
                        clientId="949668683105-e5m4vgrqv9dffqlleeb0ponf41t0c1eo.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} ></GoogleLogin>
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