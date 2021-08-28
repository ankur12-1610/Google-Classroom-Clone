import React from 'react'
import './styles/Task.css'
import img from './img/1.png'

export default function Task(props) {
    return (
        <>
        <div className="Task">
            <div className="Assignment_Logo_Holder">
                <img src={img} className="Assignment_Logo"></img>
            </div>
            <div className="Assignment_Text">
                <div ><h1><b>{props.data["Topic"]}</b></h1></div>
                <div className="Assignment_Data">
                    <div>
                        <p>Subject : {props.data["Subject"]}</p>
                    </div>
                    <div>
                        <p>Due Date : {props.data["Due_Date"]}</p>
                    </div>
                    <div>
                        <p>Graded Status : {props.data["Graded_Status"]}</p>
                    </div>
                </div>
            </div>
        </div>
        <script>
            {/* for */}
        </script>
        </>
    )
}
