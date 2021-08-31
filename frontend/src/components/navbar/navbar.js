import React, { useEffect, useState } from 'react'
import {Nav, NavDropdown, Navbar, Container, Button, Image} from 'react-bootstrap'
import UserIcon from './user.png'
import Menu from './hamburger/hamburger'
import { myaxios, authorize } from '../../connections'
import './navbar.css'
import PlusIcon from './hamburger/plus.png'
import ClassModal from './classModal/classModal'
import { useHistory } from 'react-router'
import VectorIcon from '../.././Vector.svg'
import { Link } from 'react-router-dom'
export default function NavBar({ setLoggedIn, role, setRole }) {
    // const [myrole, setMyrole] = useState("student")
    // const getRole = async () => {
    //     try {
    //         const res1 = await myaxios({
    //             method: "GET",
    //             url: "/auth/check/"
    //         })
    //         console.log(res1)
    //         if(res1.data[res1.data.length - 1].is_teacher) {
    //             console.log(res1.data[res1.data.length - 1].is_teacher)
    //             setRole("teacher")
    //             setMyrole("teacher")
    //         } else {
    //             setRole("student")
    //             setMyrole("student")
    //         }

    //     } catch(err) {
    //         console.log(err)
    //         console.log(err.response)
    //     }
    // }
    // useEffect(() => {
    //     getRole()
    // },[])
    const history = useHistory()
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
    const onCac = () => {
        onLogout()
        history.push('/signup')

    }
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
        <Navbar bg="light" variant="light" expand="lg" sticky="top" style={{borderBottom:"3px solid black", width:"100vw"}} className="navbar">
            <Container style={{display:"flex", justifyContent:"space-between"}}>
                <Navbar.Brand>{<div>
                    <Menu/>
                    <Link style={{textDecoration:"none"}} to="/">
                        <Image src={VectorIcon} width="40px" height="40px" style={{marginLeft:"20px"}}  />
                    </Link>

                </div>}</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Nav>
                    {role === "teacher" ? 
                        <ClassModal/>
                        :
                        null
                    }
                    <NavDropdown title={<img src={UserIcon} width="30px" height="30px"/>} id="responsive-nav-dropdown" style={{marginRight:"50px", border:"none"}}>
                        <NavDropdown.ItemText style={{fontWeight:"bold", fontSize:"20px", marginBottom:"5px"}}>{username}</NavDropdown.ItemText>
                        <NavDropdown.Item as={Button} onClick={onCac}>Create another account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Button} onClick={onLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}