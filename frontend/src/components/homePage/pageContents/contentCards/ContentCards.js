// import React from 'react'
// import "./styles/ContentCards.css"
// import img from "./img/default.png"
import img0 from "./img/0.jpeg"
// import img1 from "./img/1.jpeg"
// import img2 from "./img/2.jpeg"
// import img3 from "./img/3.jpeg"
// import img4 from "./img/4.jpeg"
// import img5 from "./img/5.jpeg"
// import img6 from "./img/6.jpeg"
// import img7 from "./img/7.jpeg"
// import img8 from "./img/8.jpeg"

// // import * from "./img"
// // import * from "./img/"

// export default function ContentCards(props) {

//     // This function will be used if we want to add image to the cards. This will render a default image if no url is specified 
//     // and wil render a specified image if the image url is specified 
//     function ImgCheck(props){
//         var colorPallet=["rgb(0,0,100)"];
//         var imgPallet=[]
//         imgPallet.push(img0); imgPallet.push(img1); imgPallet.push(img2); imgPallet.push(img3); imgPallet.push(img4);imgPallet.push(img5);imgPallet.push(img6);imgPallet.push(img7); imgPallet.push(img8);

//         // if(props.image==''){
//         //     return(
//         //     <div className="ImageHolder" style={{backgroundImage:`url("`+imgPallet[parseInt(props.backgroundImage)]+`")`}}>
//         //         <div><img src={img} className="ImageIcon"/></div>
//         //     </div>)
//         // }else{
//         //     return(
//         //         <div className="ImageHolder" style={{backgroundImage:`url("`+imgPallet[parseInt(props.backgroundImage)]+`")`}}>
//         //             <img src={props.image} className="ImageIcon"></img>
//         //     </div>)
//         // }
//         return(
//             <div className="ImageHolder" style={{backgroundImage:`url("`+imgPallet[parseInt(props.backgroundImage)]+`")`}}>
//                 <div><img src={img} className="ImageIcon"/></div>
//             </div>
//         )
//     }

//     return (
//         <>
//             {/* {console.log(props.data["Image"])} */}
//             <ImgCheck image={props.data["Image"]} backgroundImage={props.data["Background_Image"]}/>
//             {/* <div></div> */}
//             <div className="TS">
//                 <div></div>
//                 <div className="Teacher"><p><b>{props.data["teacher"]}</b></p></div>
//                 <div className="Subject"><p>Subject : {props.data["title"]}</p></div>
//             </div>
//         </>
//     )
// }



//hitansh

import React, { useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import "./styles/ContentCards.css"
// import Male from  './male.png'
// import Female from './female.png'
// import Pnts from './pnts.png'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { encodeBase64 } from 'bcryptjs'
export default function ContentCards({ data }) {

    useEffect(() => {
        // console.log(data.teacher, title, classroom_color)
    },[])
    return(
        <Button as={Link} to="#" style={{background:"none", border:"none"}}>
            <Card style={{ width: "17rem", color:"white", borderRadius:"10%", height:"15rem" }} className="text-center profilecard" bg="dark">
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{width:"92px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <div style={{borderBottom:"1.5px solid white", width:"100%", marginTop:"40px"}}>
                        </div>
                    </div>
                    <Card.Img as={Image} variant="top" src={img0} style={{borderRadius:"50%", width:"100px", height:"100px", border:"1.5px solid white"}}/>
                    <div style={{width:"92px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <div style={{borderBottom:"1.5px solid white", width:"100%", marginTop:"40px"}}>

                        </div>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.teacher}</Card.Text>
                </Card.Body>
            </Card>
        </Button>
    )
}
