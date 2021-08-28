import React from 'react'
import "./styles/ContentCards.css"
import img from "./img/1.png"

export default function ContentCards(props) {

    // This function will be used if we want to add image to the cards. This will render a default image if no url is specified 
    // and wil render a specified image if the image url is specified 
    function ImgCheck(props){
        if(props.address==''){
            return(
            <div className="ImageIcon" style ={ { backgroundImage: "url('./img/1.png')" } }>
                <img src="./img/1.png" style={{width:"50px"},{height:"50px"}}></img>
            </div>)
        }else{
            return(
                <div className="ImageIcon" style={{paddingTop:"2%"},{paddingLeft:"2%"}}>
                    <img src={props.address} style={{width:"80px"},{height:"80px"},{borderRadius:"50%"}}></img>
            </div>)
        }
    }

    return (
        <>
            <div className="TS">
                <div></div>
                <div className="Teacher"><p><b>{props.data["Teacher_Name"]}</b></p></div>
                <div className="Subject"><p>Subject : {props.data["Subject_Name"]}</p></div>
            </div>
        </>
    )
}
