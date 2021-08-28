import React, { useEffect } from 'react'
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap'
import UserIcon from './user.png'
import HamburgerIcon from './hamburger.png'
import Menu from './hamburger/hamburger'
export default function NavBar() {
    // useEffect(() => {
    //     window.onscroll = () => {
    //         // console.log(document.body.scrollTop, document.documentElement.scrollTop)
    //         const navbar = document.querySelector(".navbar")
    //         console.log(navbar)
    //         if(document.documentElement.scrollTop > 55) {
    //             navbar.classList.remove("bg-primary")
    //             navbar.classList.add("bg-red")
    //         } else {
    //             navbar.classList.remove("bg-red")
    //             navbar.classList.add("bg-primary")
    //         }
    //     }
    // })
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" style={{borderBottom:"3px solid black"}} className="navbar">
            <Container>
                <Navbar.Brand href="#home">{<Menu/>}</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                <Nav>
                    <NavDropdown title={<img src={UserIcon} width="30px" height="30px"/>} id="responsive-nav-dropdown" style={{marginRight:"50px"}}>
                        <NavDropdown.Item href="#action/3.1">Create another account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}