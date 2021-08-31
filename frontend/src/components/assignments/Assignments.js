import React,{ useLayoutEffect, useEffect } from 'react'
import NavBar from '../navbar/navbar'
import Body from './body/Body'
import Heading from './heading/Heading'
import './styles/Assignments.css'
import { myaxios, authorize } from '../../connections.js'

export default function Assignments(props) {

    useEffect(() => {
        // window.location.reload()
        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])
    // localStorage.itr=1;
    // if(localStorage.itr<2){
    //     localStorage.itr=2;
    //     // window.location.reload()
    // }
    const temp1=[]
    useLayoutEffect(() => {
        async function fetchData(){
            var options = {
                method: 'get',
                url: 'assignments/', 
                headers: {
                'Content-Type': 'application/json'
                }
            }
            try {
                const res = await myaxios(options)
                console.log("response")
                console.log(res.data[0]["title"]);
                window.exp=res.data;
                console.log(res.data[0]["teacher"]);
                console.log(res.data[0]["deadline"]);
                console.log(res.data[0]["score"])
                
                for(var i=0;i<res.data.length;i++){
                    var temp={
                        "Topic":res.data[i]["title"],
                        "Subject":res.data[i]["teacher"],
                        "Due_Date":(res.data[i]["deadline"].toString()).substring(0,19),
                        "Graded_Status":res.data[0]["score"],
                        "PS":"Sample Problem Statement",
                        "Assignment_ID":res.data[i]["id"]
                    }
                    temp1.push(temp)
                }
                localStorage.removeItem("Assignments")
                localStorage.Assignments=JSON.stringify(temp1)
                // window.onload = function() {
                //     if(!window.location.hash) {
                //         window.location = window.location + '#loaded';
                //         window.location.reload();
                //     }
                // }
            }catch{

            }
        }
            fetchData();
    }, [])
    // fetchAssignments()
    return (
        
        <div>
            {/* <NavBar/> */}
            <div className="Assignments">
                <Heading/>
                <Body data={temp1}/>
            </div>
        </div>
        
    )
}
