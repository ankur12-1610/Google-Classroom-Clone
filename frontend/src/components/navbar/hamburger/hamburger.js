import React, {useState} from 'react'
import { Button, Image, Offcanvas } from 'react-bootstrap'
import HamburgerIcon from '.././hamburger.png'
import CalendarIcon from './calendar.png'
import PlusIcon from './plus.png'
import TodoIcon from './todo.png'

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{border:"none", background:"none"}}>
        <Image src={HamburgerIcon} width="30px" height="30px" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{borderBottom:"1px solid black", marginBottom:"10px"}}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Button style={{background:"none", border:"none"}}>
                <div style={{display:"flex"}}>
                    <Image src={CalendarIcon} width="25px" height="25px" /> 
                    <h4 style={{ marginLeft:"20px", color:"black"}}>
                        Calendar
                    </h4>
                </div>
            </Button>
            <br/>
            <br/>
            <Button style={{background:"none", border:"none"}}>
                <div style={{display:"flex"}}>
                    <Image src={TodoIcon} width="30px" height="30px" /> 
                    <h4 style={{ marginLeft:"20px", color:"black"}}>
                        Todo
                    </h4>
                </div>
            </Button>
            <br/>
            <br/>
            {/* <Button style={{background:"none", border:"none"}}>
                <div style={{display:"flex"}}>
                    <Image src={PlusIcon} width="25px" height="25px" /> 
                    <h4 style={{ marginLeft:"20px", color:"black"}}>
                        Add Class
                    </h4>
                </div>
            </Button>
            <br/> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
