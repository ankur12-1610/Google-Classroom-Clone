import React from 'react'
import "./styles/ContentCards.css"
import img from "./img/default.png"
import img0 from "./img/0.jpeg"
import img1 from "./img/1.jpeg"
import img2 from "./img/2.jpeg"
import img3 from "./img/3.jpeg"
import img4 from "./img/4.jpeg"
import img5 from "./img/5.jpeg"
import img6 from "./img/6.jpeg"
import img7 from "./img/7.jpeg"
import img8 from "./img/8.jpeg"

// import * from "./img"
// import * from "./img/"

export default function ContentCards(props) {

    // This function will be used if we want to add image to the cards. This will render a default image if no url is specified 
    // and wil render a specified image if the image url is specified 
    function ImgCheck(props){
        var colorPallet=["rgb(0,0,100)"];
        var imgPallet=[]
        imgPallet.push(img0); imgPallet.push(img1); imgPallet.push(img2); imgPallet.push(img3); imgPallet.push(img4);imgPallet.push(img5);imgPallet.push(img6);imgPallet.push(img7); imgPallet.push(img8);

        if(props.image==''){
            return(
            <div className="ImageHolder" style={{backgroundImage:`url("`+imgPallet[parseInt(props.backgroundImage)]+`")`}}>
                <div><img src={img} className="ImageIcon"/></div>
            </div>)
        }else{
            return(
                <div className="ImageHolder" style={{backgroundImage:`url("`+imgPallet[parseInt(props.backgroundImage)]+`")`}}>
                    <img src={props.image} className="ImageIcon"></img>
            </div>)
        }
    }

    return (
        <>
            {/* {console.log(props.data["Image"])} */}
            <ImgCheck image={props.data["Image"]} backgroundImage={props.data["Background_Image"]}/>
            {/* <div></div> */}
            <div className="TS">
                <div></div>
                <div className="Teacher"><p><b>{props.data["Teacher_Name"]}</b></p></div>
                <div className="Subject"><p>Subject : {props.data["Subject_Name"]}</p></div>
            </div>
        </>
    )
}
