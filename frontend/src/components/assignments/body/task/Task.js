import React, {useState, useEffect} from 'react'
import './styles/Task.css'
import img from './img/1.png'
import AssignmentOpened from '../../assignmentOpened/AssignmentOpened'
import { useHistory } from 'react-router-dom'
import { Route, Switch, withRouter, Redirect, BrowserRouter} from 'react-router-dom';
import  NavBar from '../../../../components/navbar/navbar.js'


export default function Task(props) {
    const [changed, setChanged] = useState(false)
    const history = useHistory();
        // AssignmentOpened(props);
    const tempSuject=props.data["Subject"].toString()
    const tempDue_Date=props.data["Due_Date"].toString()
    const tempGraded_Status=props.data["Graded_Status"].toString()
    const tempPS=props.data["PS"].toString()
    const tempTopic=props.data["Topic"].toString()
    useEffect(() => {
        console.log(props)
    }, [])
    function HandleCLick(props){
        history.push(`/AssignmentDetails`);
        setChanged(true)
        // AssignmentOpened(tempSuject)
        window.AssignmentSubject=tempSuject
        window.AssignmentTopic=tempTopic
        window.AssignmentPS=tempPS
        window.AssignmentDue_Date=tempDue_Date
        window.AssignmentGraded_Status=tempGraded_Status
        console.log("hekko")
        // AssignmentOpened(props)
    }
    if(changed) {
        console.log(props.data["Subject"]);
        return (

            <AssignmentOpened data={tempSuject}/>
        )
    } else {
        

        return (
            <>
    
            <div className="Task" onClick={() => HandleCLick(props.data)} >
                <div className="Assignment_Logo_Holder">
                    <img src={img} className="Assignment_Logo"></img>
                </div>
                <div className="Assignment_Text">
                    <div ><h1 style={{paddingTop:"15px"}}><b>{props.data["Topic"]}</b></h1></div>
                    <div className="Assignment_Data">
                        <div>
                            <p style={{marginBottom:"0px"}}>Subject : {props.data["Subject"]}</p>
                        </div>
                        <div>
                            <p style={{marginBottom:"0px"}}>Due Date : {props.data["Due_Date"]}</p>
                        </div>
                        <div>
                            <p className="LT" style={{marginBottom:"2px"}}>Graded Status : {props.data["Graded_Status"]}</p>
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

}
