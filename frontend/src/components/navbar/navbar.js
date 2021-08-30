import React, { useEffect, useState } from 'react'
import {Nav, NavDropdown, Navbar, Container, Button} from 'react-bootstrap'
import UserIcon from './user.png'
import Menu from './hamburger/hamburger'
import { myaxios, authorize } from '../../connections'
export default function NavBar({ setLoggedIn }) {
    
    const onLogout = async function() {
        localStorage.removeItem('token')
        try {
            const res = await myaxios({
                method: "POST",
                url: "/auth/logout/"
            })
            console.log(res)
            if(res.data.detail === "Successfully logged out.") {
                localStorage.removeItem('token')
                delete myaxios.defaults.headers.common['Authorization']
                setLoggedIn(false)
            }
        } catch(err) {
            console.log(err.response)
        }
    }
    const [username, setUsername] = useState("")

    useEffect(() => {
        const getProfile = async function() {
            try {
                const res = await myaxios({
                    method: "GET",
                    url: "/auth/profile/",
                })
                console.log(res)
                setUsername(res.data.username)
            } catch(err) {
                console.log(err)
                console.log(err.response)
            }
        }
        getProfile()
    },[])

    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" style={{borderBottom:"3px solid black"}} className="navbar">
            <Container>
                <Navbar.Brand href="#home">{<Menu/>}</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Nav>
                    <NavDropdown title={<img src={UserIcon} width="30px" height="30px"/>} id="responsive-nav-dropdown" style={{marginRight:"50px", border:"none"}}>
                        <NavDropdown.Item style={{fontWeight:"bold"}}>{username}</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.1">Create another account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Button} onClick={onLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}