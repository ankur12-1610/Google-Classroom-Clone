import React, {useState} from 'react'
import { Button, Image, Offcanvas } from 'react-bootstrap'
import HamburgerIcon from '.././hamburger.png'
import CalendarIcon from './calendar.png'
import HomeIcon from './home.png'
import TodoIcon from './todo.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{border:"none", background:"none"}} variant="dark">
        <Image src={HamburgerIcon} width="30px" height="30px" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{borderBottom:"1px solid black", marginBottom:"10px"}}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{margin:"0px", padding:"0"}}>
            <Button style={{background:"none", border:"none", marginBottom:"4px", width:"100%"}} variant="dark" as={Link} to="/">
                <div style={{display:"flex"}}>
                    <Image src={HomeIcon} width="30px" height="30px" /> 
                    <h4 style={{ marginLeft:"20px", color:"black"}}>
                        Home
                    </h4>
                </div>
            </Button>
            <br/>
            <div style={{borderBottom:"1px solid black", width:"100%"}}></div>
            <br/>
            <Button style={{background:"none", border:"none", width:"100%"}} variant="dark" >
                <div style={{display:"flex"}}>
                    <Image src={CalendarIcon} width="25px" height="25px" /> 
                    <h4 style={{ marginLeft:"20px", color:"black"}}>
                        Calendar
                    </h4>
                </div>
            </Button>
            <br/>
            <br/>
            <Button style={{background:"none", border:"none", width:"100%"}} variant="dark" >
                <div style={{display:"flex"}}>
                    <Image src={TodoIcon} width="30px" height="30px" /> 
                    <h4 style={{ marginLeft:"20px", color:"black"}}>
                        Todo
                    </h4>
                </div>
            </Button>
            <br/>
            <br/>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
